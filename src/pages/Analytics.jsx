import '../styles/fonts.css';
import { IonPage, IonMenuButton, IonButtons } from "@ionic/react";

export function Analytics(){

    return(
        <IonPage>
            <IonButtons slot="start">
                <IonMenuButton autoHide="false" menu="dashboard"/>
            </IonButtons>
            <h3>Analytics</h3>
        </IonPage>
    )
}