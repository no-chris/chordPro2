import _ from 'lodash';
import IncorrectBeatCountException from './exceptions/IncorrectBeatCountException';


export default function parseChordLine(
	chordLine,
	{
		beatsPerBar = 4
	} = {}
) {

	const allLineChords = chordLine.split(' ');
	const allBars = [];

	let bar = { allChords: []};
	let chord;
	let beatsCount = 0;
	let chordCount = 0;

	allLineChords.forEach(chordString => {
		chord = {
			string: chordString,
			duration: ((chordString.match(/\./g) || []).length) || beatsPerBar,
			symbol: chordString.replace(/\./g, '')
		};
		beatsCount += chord.duration;

		bar.allChords.push(chord);
		chordCount++;

		if (beatsCount === beatsPerBar) {
			allBars.push(_.cloneDeep(bar));
			bar = { allChords: []};
			beatsCount = 0;

		} else if (beatsCount > beatsPerBar) {
			throw new IncorrectBeatCountException({
				message: '',
				string: chord.string,
				symbol: chord.symbol,
				duration: chord.duration,
				beatCount: beatsCount,
				beatsPerBar: beatsPerBar,
			});
		}
	});

	if (beatsCount > 0 && (beatsCount < beatsPerBar)) {
		throw new IncorrectBeatCountException({
			message: '',
			string: chord.string,
			symbol: chord.symbol,
			duration: chord.duration,
			beatCount: beatsCount,
			beatsPerBar: beatsPerBar,
		});
	}

	return {
		chordCount,
		allBars
	};
}