import React, { useContext } from 'react';
import { Routes, Route} from 'react-router-dom';
import { AppContext } from '../components/AppContext';
import Conta from '../pages/Conta';
import ContaInfo from '../pages/ContaInfo';
import Home from '../pages/Home';

const PrivateRoutes = () => {
    const { isLoggedIn } = useContext(AppContext);

    return(
        <Routes>
            <Route path='/conta/:id' element={isLoggedIn ? <Conta /> : <Home />}/>
            <Route path='/infoconta' element={isLoggedIn ? <ContaInfo /> : <Home />} />
        </Routes>
    )
}

export default PrivateRoutes;