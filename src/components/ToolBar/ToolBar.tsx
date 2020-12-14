import React from 'react';
import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';

const ToolBar: React.FC = () => {
    return(
        <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />

                    </IonButtons>
                    <IonTitle> <div className="user-view">
                        <img src="/assets/img/logo.png" alt="menu" />
                    </div></IonTitle>
                </IonToolbar>
            </IonHeader>
    )
}

export default ToolBar;