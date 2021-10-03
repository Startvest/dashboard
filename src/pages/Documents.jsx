import '../styles/fonts.css';
import { IonPage, IonMenuButton, IonButtons } from "@ionic/react";

export function Documents(){

    return(
        <IonPage>
            <IonButtons slot="start">
                <IonMenuButton autoHide="false" menu="dashboard"/>
            </IonButtons>
            
            <h3>Documents</h3> 
        </IonPage>
    )
}