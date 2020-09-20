export default function cartReducer(state, action) {

    switch(action.type) {
        case 'ADD_ITEM':
            let change = false;

            const newState = state.map(item => {
                if(item._id === action.payload._id) {
                    change = true;
                    const newItem = {
                        ...item,
                        count: item.count+1
                    }
                    return newItem;
                }
                return item;
            })

            return change ? newState : [...state, action.payload];
        case 'REMOVE_ITEM':
            return state.map(item => {
                if(item._id === action.payload._id) {
                    const newItem = {
                        ...item,
                        count: item.count-1
                    }
                    return newItem;
                }
                return item;
            }).filter(item => item.count > 0);
        case 'CLEAR':
            return []
        default:
            return state
    }
}
