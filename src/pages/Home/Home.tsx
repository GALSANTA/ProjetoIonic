import { IonHeader, IonPage, IonContent } from '@ionic/react';
import React from 'react';

import ParallaxHeader from '../../containers/ParallaxHeader/ParallaxHeader';
import LoginArea from '../../containers/LoginArea/LoginArea';
import Form from '../../components/Form/Form';
import Menu from '../../components/Menu/Menu';
import Footer from '../../containers/Footer/Footer';

import './Home.css';

import {routes} from '../../utils/.env.local';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Menu menuItems={{
          link1: ['Home', routes.home],
          link2: ['SignUp', routes.signUp]
        }} />
      </IonHeader>
      <IonContent>
        <ParallaxHeader 
        component={
        <LoginArea>
          <Form typeForm={true} />
          </LoginArea>
        } text={{
          texto1:"VENHA CONHECER O SISTEMA ESTÁGIO!", 
          texto2:"Sistema que tem com intuito de fazer busca sobre o tempo pelo CEP, fazer uma lista de compras e verificar a moeda do Real.",
          url: "/assets/img/parallax.jpg"
          }}/>
        <Footer/>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
