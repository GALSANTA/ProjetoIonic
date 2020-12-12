import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {getUser} from '../src/config/firebaseConfig';
import AcessDenied from '../src/pages/AcessDenied/AcessDenied';

const PrivateRoute: React.FC<{
    Component: React.FC;
    path: string;
}> = ({Component, ...rest}) => {

    const [ isLoginDone, setLoginDone ] = React.useState(false);

    React.useEffect(() => {
        getUser().then(user =>{
          if (user) {
            setLoginDone(true);
          } else {
            setLoginDone(false);
          }
        });
    });

    return(
        isLoginDone
        ?
        <Route { ...rest } render = {props => (
            isLoginDone
            ? 
            (<Component/>) 
            :
            (<Redirect to={{pathname: '/', state: {from:props.location}}}/>)
        )}/>
        :
        <AcessDenied/>
       );
}

export default PrivateRoute;
