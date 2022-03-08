import {сurPageIndexActT} from '../actions/сurPageIndex';
import initialState from '../initialState';
import store from '../store';

export  function сurPageIndex(state:any, action:any) {
    switch(action.type) {
        case сurPageIndexActT: return action.value;
        default: return initialState.сurPageIndex;
    }
}

export default {}
