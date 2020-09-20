export default function itemReducer(state, action) {
    switch(action.type) {
        case 'ADD_ITEMS':
            return [
                ...state,
                ...action.payload
            ]
        case 'CLEAR':
            return []
        default:
            return state
    }
}
