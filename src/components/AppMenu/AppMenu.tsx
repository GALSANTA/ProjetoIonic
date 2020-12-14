import React from 'react';
import { IonMenu } from '@ionic/react';
import { signOut } from '../../config/firebaseConfig';
import { routes } from '../../utils/.env.local';

import './AppMenu.css';

const AppMenu: React.FC = () => {

  async function clickSignOut() {

    await signOut();

    window.location.href = routes.home;
}

  return (
    <IonMenu contentId="main" type="overlay">
      <ul>
      
        <li><div className="divider"></div></li>
        <div className="row">
          <li className="col s12">
            <a href={routes.cep} className="waves-effect waves-light btn cyan darken-4 white-text button-sidenav">
              <i className="material-icons white-text left">room</i>
                            Buscar tempo
            </a>
          </li>
          <li className="col s12">
            <a href={routes.lista} className="waves-effect waves-light btn cyan darken-4 white-text button-sidenav">
              <i className="material-icons white-text left">shopping_cart</i>
                            Compras
                        </a>
          </li>
          <li className="col s12">
            <a href={routes.moedas}className="waves-effect waves-light btn cyan darken-4 white-text button-sidenav">
              <i className="material-icons white-text left">euro_symbol</i>
                            Moedas
                        </a>
          </li>
          <li className="col s12">
            <a href={routes.configuracoes} className="waves-effect waves-light btn cyan darken-4 white-text button-sidenav">
              <i className="material-icons white-text left">room_preferences</i>
                            Configurações
                        </a>
          </li>
          <li className="col s12">
            <a href="/" className="waves-effect waves-light btn cyan darken-4 white-text button-sidenav" onClick={clickSignOut}>
              <i className="material-icons white-text left">exit_to_app</i>
                            Log Out
                        </a>
          </li>
        </div>

      </ul>
    </IonMenu>
  );
};

export default AppMenu;
