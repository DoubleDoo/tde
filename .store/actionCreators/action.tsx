import {
	CRUD_ID_EPI,
	CRUD_ID_BAC, 
	CRUD_ID_REP, 
	CRUD_ID_EVE,
	LOUD_BAC,
	INTR_BAC,
	ENAB_BAC,
	LOUD_REP,
	INTR_REP,
	ENAB_REP,
	LOUD_EVE,
	INTR_EVE,
	ENAB_EVE,
} from '../actions/action';

export function loudBackground(value:number) {
	return {
		type: LOUD_BAC,
		value: value
	};
}

export default {};
