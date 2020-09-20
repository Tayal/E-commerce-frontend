export default function userReducer(state, action) {
    switch(action.type) {
        case 'SIGNUP':
        case 'LOGIN':
            return {
                ...state,
                name: action.payload,
                isAuthenticated: true
            }
        case 'AUTH_FAIL':
        case 'LOGOUT':
            return {
                ...state,
                name: null,
                isAuthenticated: false,
                err: action.payload
            }
        default:
            return state
    }
}
