import React from 'react';
import { Route } from 'react-router-dom';
import {getUser} from '../src/config/firebaseConfig';
import AcessDenied from '../src/pages/AcessDenied/AcessDenied';
import { routes } from '../src/utils/.env.local';
import Application from './pages/Application/Application';


const PrivateRoute: React.FC<{
    path: string;
}> = (path) => {

    const [ isLoginDone, setLoginDone ] = React.useState(false);
    
    React.useEffect(() => {
        getUser().then(user =>{
          if (user) {
            setLoginDone(true);
          } else {
            setLoginDone(false);
            window.location.href = routes.home;
          }
        }).catch(error=>console.log(error));        
    });

    return(
        <Route {...path} render = {() => {
          return isLoginDone ? <Application /> : <AcessDenied/>
        }}/>
       );
}

export default PrivateRoute;
