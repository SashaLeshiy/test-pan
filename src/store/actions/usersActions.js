import { api } from "../../utils/TableApi";
import * as actions from "./index";

export const getUsers = () => {
    return dispatch => {
        api.getList()
            .then((data) => {
                dispatch({ type: actions.GET_USERS, user: data, sort: 'desc' })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const addUsers = (userData) => {
    console.log(userData);
    return dispatch => {
        dispatch({ type: actions.ADD_USER, user: userData, sort: 'desc' })
    }
}