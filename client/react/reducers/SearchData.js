import { FETCH_DATA } from '../action/type';

export default function(state = [], action) {
    switch(action.type){
        case FETCH_DATA:
            return action.payload.data.results
        default:
            return state;
    };
}