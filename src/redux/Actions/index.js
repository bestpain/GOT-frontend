import axios from "axios";
import { FETCH_BATTLES, INVALID_NAME, VALID_NAME ,AUTO_SUGGESTIONS,TOTAL_BATTLE,BATTLE_LOCATIONS} from "./types";

export const getDetailsByKing = (formValues) => async (dispatch) => {
  const response = await axios.get('https://gotbattleserver.herokuapp.com/search', {
    params: {
      king: formValues.kingName,
      location: formValues.location,
      type: formValues.type,
    },
  });
  if (response.data.length) {
    dispatch({ type: FETCH_BATTLES, payload: response.data });
    dispatch({ type: VALID_NAME });
  } else dispatch({ type: INVALID_NAME });
};

export const clearError = () => dispatch=>{
  dispatch({ type: VALID_NAME });
};

export const getSuggestions=(term)=>async (dispatch)=>{
  const response = await axios.get('https://gotbattleserver.herokuapp.com/suggest', {
    params: {
      term
    },
  });
    dispatch({ type: AUTO_SUGGESTIONS, payload: response.data });
  
}

export const battleCount=()=>async (dispatch)=>{
  const response = await axios.get('https://gotbattleserver.herokuapp.com/count')
    dispatch({ type: TOTAL_BATTLE, payload: response.data.count });
}

export const getBattleLocations=()=>async (dispatch)=>{
  const response = await axios.get('https://gotbattleserver.herokuapp.com/list')
    dispatch({ type: BATTLE_LOCATIONS, payload: response.data });
}