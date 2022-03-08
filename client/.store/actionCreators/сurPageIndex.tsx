import {
	сurPageIndexActT,
} from '../actions/сurPageIndex';

export function сurPageIndexAct(value:number) {
	return {
		type: сurPageIndexActT,
		value: value
	};
}

export default {};
