import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from './actionsType';
import axios from 'axios';

// action creators

export const fetchDataRequest = () => {
    return {
        type : FETCH_DATA_REQUEST
    }
}

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload : data
    }
}

export const fetchDataFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload : error
    }
}

// reducers take simple action objects as arguments
// API request is an impure function, this action is going to return a function instead of an object


export const fetchPost = () => {
    return (
        async(dispatch) => {
            try{
                const response = await axios.get('https://gauravgitacc.github.io/postAppData/posts.json');
                dispatch(fetchDataSuccess(response.data))
            }
            catch(error){
                dispatch(fetchDataFailure(error.data))
            }
            

        }
    )


}