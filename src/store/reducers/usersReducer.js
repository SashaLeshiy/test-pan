import * as actions from "../actions/index";

const initialState = {user: [{id: '', fname: '', lmane: '', email: '', phone: ''}], sort: 'desc'};
// const initialState = {};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.GET_USERS:
            return {...state, user: action.user, sort: action.sort}
        case actions.ADD_USER:
            return {...state, user: action.user, sort: action.sort}

        default:
            return state;
    }
}

export default reducer;