import React, { useReducer, createContext, useEffect } from 'react'
import itemReducer from '../reducers/itemReducer';
import userReducer from '../reducers/userReducer';
import cartReducer from '../reducers/cartReducer';
import axios from 'axios';

export const MainContext = createContext();

export default function Store(props) {
    
    useEffect(() => {
        axios.get('/items')
            .then(res => {
                console.log(res.data[0]);
                dispatch_item({type: 'ADD_ITEMS', payload: res.data})
            });
    }, []);

    const [items, dispatch_item] = useReducer(itemReducer, []);
    const [cart, dispatch_cart] = useReducer(cartReducer, []);
    const [user, dispatch_user] = useReducer(userReducer, {err: null, isAuthenticated: false, name: null, token: null});
    
    return (
        <MainContext.Provider value={{items, dispatch_item, cart, dispatch_cart, user, dispatch_user}}>
            {props.children}
        </MainContext.Provider>
    )
}
