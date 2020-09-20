import React, {useContext} from 'react';
import { MainContext } from './Store';
import Main from './Main';
import Home from './Home';
import Header from './Header';

export default function Router() {
    
    const {user} = useContext(MainContext);

    return (
        <div>
            <Header />
            {
                user.isAuthenticated ?
                <Home />
                :
                <Main />
            }
            <div style={{fontFamily: 'Righteous', fontSize: '20px', color: 'white', backgroundColor: 'grey', height: '7vh', textAlign: 'center', padding: '10px'}}>
                Apni Dukaan @ Saurav Tayal
            </div>
        </div>
    )
}