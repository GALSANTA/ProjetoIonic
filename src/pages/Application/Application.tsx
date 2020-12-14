import React from 'react';
import { IonSplitPane, IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import { routes } from '../../utils/.env.local';
import Cep from '../../containers/Cep/Cep';
import AppMenu from '../../components/AppMenu/AppMenu';
import Configuracoes from '../../containers/Configuracoes/Configuracoes';

import './Application.css';

const Application: React.FC = () => {


    return (
        <>
            <IonApp>
                <IonReactRouter>
                    <IonSplitPane contentId="main">
                        <AppMenu />
                        <IonRouterOutlet id="main">
                            <Route exact path={routes.cep} component={Cep} />
                            <Route exact path={routes.lista} render={() => <h1>Não Implementado</h1>} />
                            <Route exact path={routes.moedas} render={() => <h1>Não Implementado</h1>} />
                            <Route exact path={routes.configuracoes} component={Configuracoes} />
                        </IonRouterOutlet>
                    </IonSplitPane>
                </IonReactRouter>
            </IonApp>


        </>



    );
}

export default Application;