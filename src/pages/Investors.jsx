import '../styles/fonts.css';
import { IonButtons, IonMenuButton, IonPage } from "@ionic/react";

export function Investors(){

    return(
        <IonPage>
            <IonButtons slot="start">
                <IonMenuButton autoHide="false" menu="dashboard"/>
            </IonButtons>
            <h3>Welcome Investors</h3> 
        </IonPage>
    )
}