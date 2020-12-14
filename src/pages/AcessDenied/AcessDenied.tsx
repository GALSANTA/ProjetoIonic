import React from 'react';
import { IonHeader, IonPage} from '@ionic/react';
import {getUser} from '../../config/firebaseConfig';
import { routes } from '../../utils/.env.local';

const AcessDenied: React.FC = () => {

  const [ isLoginDone, setLoginDone ] = React.useState(false);

  React.useEffect(() => {
    getUser().then((user:any) =>{
      if (user) {
        setLoginDone(true);
      } else {
        setLoginDone(false);
        window.location.href = routes.home;
      }
    }).catch((error:any)=>console.log(error));        
});
    return (
      <IonPage>
        {isLoginDone ? <></> :  <IonHeader>NEGADO</IonHeader>}
       
      </IonPage>
    );
};

export default AcessDenied;
