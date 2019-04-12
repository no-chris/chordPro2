import './ProsemirrorEditorView.scss';

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { DOMParser as pmDOMParser } from 'prosemirror-model';

import getPlugins from './getPlugins';
import editorSchema from './schema';

import stateToText from './converters/stateToText';
import textToDom from './converters/textToDom';

import 'prosemirror-view/style/prosemirror.css';


function createEditorState(editorContent) {
	return EditorState.create({
		doc: pmDOMParser.fromSchema(editorSchema).parse(textToDom(editorContent), { preserveWhitespace: 'full' }),
		plugins: getPlugins()
	});
}

function createEditorView(editorState, onEditorChange, fileId) {
	return new EditorView(null, {
		state: editorState,
		dispatchTransaction: function dispatchTransaction(transaction) {
			const { state, transactions } = this.state.applyTransaction(transaction);

			this.updateState(state);

			if (transactions.some(tr => tr.docChanged)) {
				onEditorChange(fileId, stateToText(state));
			}
		},
	});
}

export default function ProseMirrorEditorView(props) {
	const { selectedFileId, editorContent, onEditorChange } = props;

	const editorView = useRef();
	const editorDom = useRef();
	const previousFileId = usePrevious(selectedFileId);

	/**
	 * Editor is recreated on component mount and on file change.
	 * The later is needed as we need to to re-bind the change handler with the new file id.
	 */
	function shouldCreateEditor() {
		return selectedFileId && (!editorView.current || (previousFileId !== selectedFileId));
	}

	// Editor has been previously created, but now no file is selected anymore
	function isEditorOrphan() {
		return editorExists() && !selectedFileId;
	}

	function editorExists() {
		return editorView.current && editorView.current.dom.parentNode;
	}

	function destroyEditor() {
		editorView.current.dom.parentNode.removeChild(editorView.current.dom);
	}

	useEffect(() => {
		if (shouldCreateEditor()) {
			if (editorExists()) {
				destroyEditor();
			}

			const editorState = createEditorState(editorContent);
			editorView.current = createEditorView(editorState, onEditorChange, selectedFileId);
			editorDom.current.appendChild(editorView.current.dom);

			// expose editor instance as a component property for unit tests
			ProseMirrorEditorView.editorView = editorView.current;

		} else if (isEditorOrphan()) {
			destroyEditor();
		}
	});

	return (
		<div className={'prosemirrorWrapper'} ref={editorDom} />
	);
}

ProseMirrorEditorView.propTypes = {
	selectedFileId: PropTypes.string.isRequired,
	editorContent: PropTypes.string.isRequired,
	onEditorChange: PropTypes.func.isRequired,
};


// @see https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
function usePrevious(value) {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}
