import React from 'react';
import { deleteAccount } from '../../config/firebaseConfig';
import { routes } from '../../utils/.env.local';


const Configuracoes: React.FC = () => {

    async function clickDelete(e:any) {
        e.preventDefault();
        await deleteAccount();
        window.location.href = routes.home;
    }
    return(
        <>
        <h1>Delete sua conta clicando abaixo</h1>
        <a href="/" className="waves-effect waves-light btn cyan darken-4 white-text button-sidenav" onClick={clickDelete}>
              <i className="material-icons white-text left">delete</i>
                            Deletar Conta
            </a>
        </>
    )
}

export default Configuracoes;