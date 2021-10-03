import '../styles/fonts.css';
import { IonPage, IonMenuButton, IonButtons } from "@ionic/react";

export function Messages(){

    return(
        <IonPage>
            <IonButtons slot="start">
                <IonMenuButton autoHide="false" menu="dashboard"/>
            </IonButtons>
            
            <h3>Messages</h3> 
        </IonPage>
    )
}