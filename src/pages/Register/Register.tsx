import React from 'react';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import Menu from '../../components/Menu/Menu';
import Form  from '../../components/Form/Form';
import Footer from '../../containers/Footer/Footer';
import ParallaxHeader from '../../containers/ParallaxHeader/ParallaxHeader';
import SignUpArea from '../../containers/SignUpArea/SignUpArea';
import { routes } from '../../utils/.env.local';

const Register: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
        <Menu menuItems={{ 
          link1: ['Home', routes.home],
          link2: ['SignUp', routes.signUp]
        } }/>
        </IonHeader>
        <IonContent>
        <ParallaxHeader 
        component={
          <SignUpArea>
            <Form typeForm={false} />
          </SignUpArea>

        } text={{
          texto1:"FAÇA SUA INSCRIÇÃO!", 
          texto2:"Aqui você pode fazer sua conta para acessar o sistema.",
          url: "/assets/img/parallax2.jpg"
          }}/>
          <Footer/> 
        </IonContent>
      </IonPage>
    );
  };
  
  export default Register;