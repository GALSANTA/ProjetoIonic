import React from 'react';
import { IonContent } from '@ionic/react';
import { deleteAccount } from '../../config/firebaseConfig';
import ToolBar from '../../components/ToolBar/ToolBar';
import { routes } from '../../utils/.env.local';


const Configuracoes: React.FC = () => {

    async function clickDelete(e: any) {
        e.preventDefault();
        await deleteAccount();
        window.location.href = routes.home;
    }
    return (
        <IonContent>
            <ToolBar />
            <h1>Delete sua conta clicando abaixo</h1>
            <a href="/" className="waves-effect waves-light btn cyan darken-4 white-text button-sidenav" onClick={clickDelete}>
                <i className="material-icons white-text left">delete</i>
                            Deletar Conta
            </a>
        </IonContent>
    )
}

export default Configuracoes;