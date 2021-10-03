import { IonPage, IonMenuButton, IonButtons } from '@ionic/react';
import '../styles/fonts.css';

export function Account(){
    return(
        <IonPage>
            <IonButtons slot="start">
                <IonMenuButton autoHide="false" menu="dashboard"/>
            </IonButtons>
            <h3>Account</h3>
        </IonPage>
    )
}