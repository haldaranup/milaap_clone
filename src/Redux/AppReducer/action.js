import * as types from "./actionTypes";
import axios from "axios";

const getDonate =()=>(dispatch)=>{
    dispatch({type:types.GET_DONATE_DATA_REQUEST})
    return axios.get("https://floating-crag-24295.herokuapp.com/donate")
      .then((r)=>{
        return dispatch({type:types.GET_DONATE_DATA_SUCCESS,payload:r.data})
      }).catch((e)=>{
        return dispatch({type:types.GET_DONATE_DATA_FAILURE})
      })
}

export {getDonate};
