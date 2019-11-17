  
import { combineReducers } from "redux";
import boardsReducer from './boardReducer';
// import listsReducer from './listReducer';

export default combineReducers({
  boards: boardsReducer
});