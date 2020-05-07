import { combineReducers } from "redux";
import {
  FETCH_BATTLES,
  INVALID_NAME,
  VALID_NAME,
  AUTO_SUGGESTIONS,
  TOTAL_BATTLE,
  BATTLE_LOCATIONS
} from "../Actions/types";

const battleReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BATTLES:
      return action.payload;
    default:
      return state;
  }
};

const errorReducer = (state = false, action) => {
  switch (action.type) {
    case INVALID_NAME:
      return true;
    case VALID_NAME:
      return false;
    default:
      return state;
  }
};

const searchBar=(state=[],action)=>{
  switch (action.type) {
    case AUTO_SUGGESTIONS:
      return action.payload;
    default:
      return state;
  }
}

const battleCountReducer = (state = null, action) => {
  switch (action.type) {
    case TOTAL_BATTLE:
      return action.payload;
    default:
      return state;
  }
};

const battleLocationsReducer = (state = [], action) => {
  switch (action.type) {
    case BATTLE_LOCATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  battles: battleReducer,
  searchBar,
  error: errorReducer,
  count:battleCountReducer,
  locations:battleLocationsReducer
});
