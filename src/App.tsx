import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import Resgister from './pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import Application from './pages/Application/Application';
import NotFound from '../src/pages/NotFound/NotFound';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <PrivateRoute path="/app" Component={Application} />
          <Route path="/register" component={Resgister} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => <NotFound/>} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>)


}

export default App;
