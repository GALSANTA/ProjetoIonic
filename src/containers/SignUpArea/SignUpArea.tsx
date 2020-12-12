import React from 'react';
import { IonTitle } from '@ionic/react';
import '../SignUpArea/SignUpArea.css';

const SignUpArea: React.FC<{}> = (props: React.PropsWithChildren<{}>) => {

    return (
        <div className="signup-area">
            <IonTitle className="title">Cadastre-se por este formulário</IonTitle>
            <div className="row">{props.children}</div>
            </div>
    );

}

export default SignUpArea;