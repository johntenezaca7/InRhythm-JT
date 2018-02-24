import { combineReducers } from 'redux';
import searchData from './SearchData';

const rootReducer = combineReducers({
  data: searchData
});

export default rootReducer;