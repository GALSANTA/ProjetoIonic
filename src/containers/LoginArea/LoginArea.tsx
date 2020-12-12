import React from 'react';
import { IonTitle } from '@ionic/react';
import {StyledFirebaseAuth} from 'react-firebaseui';
import * as firebase from 'firebase';
import '../LoginArea/LoginArea.css';

import { routes } from '../../utils/.env.local';
const LoginArea: React.FC<{}> = (props: React.PropsWithChildren<{}>) => {

    return (
        <div className="login-area">
            <IonTitle className="title">Entre no sistema por aqui</IonTitle>

            <div className="row">{props.children}</div>
            <IonTitle className="title">Ou entre com o Facebook</IonTitle>
            <StyledFirebaseAuth 
            uiConfig = {{
                signInFlow: "popup",
                signInOptions: [firebase.default.auth.FacebookAuthProvider.PROVIDER_ID],
                signInSuccessUrl: routes.app,
            }} 
                firebaseAuth ={firebase.default.auth()}/>
            <IonTitle className="title">Não é cadastrado ainda?</IonTitle>
            <a className="col s12" href={routes.signUp}>
                Cadastre clicando aqui!
            </a>
        </div>

    );
}

export default LoginArea;