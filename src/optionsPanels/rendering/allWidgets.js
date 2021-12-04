/* eslint-disable max-lines */
export default {
	widgetsOrder: ['key', 'preferences', 'layout', 'style'],

	allWidgets: {
		key: {
			label: 'Key',
			type: 'optionsGroup',
			icon: 'music_note',

			groupWidgetsOrder: [
				'transposeValue',
				'harmonizeAccidentals',
				'preferredAccidentals',
			],
			allGroupWidgets: {
				transposeValue: {
					label: 'Transpose',
					type: 'slider',
					typeOptions: {
						min: -11,
						max: 11,
						showPlusSymbol: true,
					},
					option: {
						context: 'songPreferences',
						key: 'transposeValue',
					},
				},

				harmonizeAccidentals: {
					label: 'Harmonize accidentals',
					type: 'toggle',
					option: {
						context: 'songPreferences',
						key: 'harmonizeAccidentals',
					},
				},

				preferredAccidentals: {
					label: 'Preferred accidentals',
					type: 'select',
					typeOptions: {
						allChoices: [
							{
								id: 'preferredAccidentalsAuto',
								label: 'Auto',
								value: 'auto',
							},
							{
								id: 'preferredAccidentalsSharp',
								label: 'Sharp (#)',
								value: 'sharp',
							},
							{
								id: 'preferredAccidentalsFlat',
								label: 'Flats (b)',
								value: 'flat',
							},
						],
					},
					option: {
						context: 'songPreferences',
						key: 'preferredAccidentals',
					},
				},
			},
		},

		preferences: {
			label: 'Preferences',
			type: 'optionsGroup',
			icon: 'tune',

			groupWidgetsOrder: [
				'chartFormat',
				'chartType',
				'alignChordsWithLyrics',
				'alignBars',
				'autoRepeatChords',
			],
			allGroupWidgets: {
				chartFormat: {
					label: 'Export format',
					type: 'select',
					typeOptions: {
						allChoices: [
							{
								id: 'formatChordMark',
								label: 'ChordMark (Rendered)',
								value: 'chordmark',
							},
							{
								id: 'formatChordMarkSrc',
								label: 'ChordMark (Source)',
								value: 'chordmarkSrc',
							},
							{
								id: 'formatChordpro',
								label: 'ChordPro',
								value: 'chordpro',
							},
						],
					},
					option: {
						context: 'songFormatting',
						key: 'chartFormat',
					},
				},
				chartType: {
					label: 'Chart type',
					type: 'select',
					typeOptions: {
						allChoices: [
							{
								id: 'typedisplayAll',
								label: 'Complete',
								value: 'all',
							},
							{
								id: 'typedisplayLyrics',
								label: 'Lyrics only',
								value: 'lyrics',
							},
							{
								id: 'typedisplayChords',
								label: 'Chords only',
								value: 'chords',
							},
							{
								id: 'typedisplayChordsFirstLyricLine',
								label: 'Chords + First lyric line',
								value: 'chordsFirstLyricLine',
							},
						],
					},
					option: {
						context: 'songFormatting',
						key: 'chartType',
					},
				},
				alignChordsWithLyrics: {
					label: 'Align chords with lyrics',
					type: 'toggle',
					option: {
						context: 'songFormatting',
						key: 'alignChordsWithLyrics',
					},
				},
				alignBars: {
					label: 'Align bars',
					type: 'toggle',
					option: {
						context: 'songFormatting',
						key: 'alignBars',
					},
				},
				autoRepeatChords: {
					label: 'Auto repeat chords',
					type: 'toggle',
					option: {
						context: 'songFormatting',
						key: 'autoRepeatChords',
					},
				},
			},
		},

		layout: {
			type: 'optionsGroup',
			label: 'Layout',
			icon: 'view_compact',

			groupWidgetsOrder: [
				'columnsCount',
				'columnBreakOnParagraph',
				'documentMargins',
			],
			allGroupWidgets: {
				columnsCount: {
					label: 'Columns',
					type: 'slider',
					typeOptions: {
						min: 1,
						max: 4,
					},
					option: {
						context: 'songFormatting',
						key: 'columnsCount',
					},
				},

				columnBreakOnParagraph: {
					label: 'Break on paragraph',
					type: 'toggle',
					option: {
						context: 'songFormatting',
						key: 'columnBreakOnParagraph',
					},
				},

				documentMargins: {
					label: 'Margins',
					type: 'slider',
					typeOptions: {
						min: 1,
						max: 5,
					},
					option: {
						context: 'songFormatting',
						key: 'documentMargins',
					},
				},
			},
		},

		style: {
			type: 'optionsGroup',
			label: 'Style',
			icon: 'format_size',

			groupWidgetsOrder: ['fontSize', 'chordsColor', 'highlightChords'],

			allGroupWidgets: {
				fontSize: {
					label: 'Font size',
					type: 'slider',
					typeOptions: {
						min: -5,
						max: +5,
						showPlusSymbol: true,
					},
					option: {
						context: 'songFormatting',
						key: 'fontSize',
					},
				},

				chordsColor: {
					label: 'Chords color',
					type: 'select',
					typeOptions: {
						allChoices: [
							{
								id: 'chordsColor',
								label: 'Base',
								value: 'base',
							},
							{
								id: 'chordsColorRed',
								label: 'Red',
								value: 'red',
							},
							{
								id: 'chordsColorYellow',
								label: 'Yellow',
								value: 'yellow',
							},
							{
								id: 'chordsColorGreen',
								label: 'Green',
								value: 'green',
							},
						],
					},
					option: {
						context: 'songFormatting',
						key: 'chordsColor',
					},
				},

				highlightChords: {
					label: 'Highlight Chords',
					type: 'toggle',
					option: {
						context: 'songFormatting',
						key: 'highlightChords',
					},
				},
			},
		},
	},
};
