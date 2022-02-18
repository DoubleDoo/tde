import {LOUD_BAC} from '../actions/action';
import initialState from '../initialState';
import store from '../store';

export  function background(state:any, action:any) {
    switch(action.type) {
        case LOUD_BAC: return action.value;
        default: return initialState.background[action.id].loud;
    }
}

export default {}
