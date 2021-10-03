import '../styles/fonts.css';
import { IonPage, IonMenuButton, IonButtons } from "@ionic/react";

export function Tools(){

    return(
        <IonPage>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            
            <h3>Tools</h3> 
        </IonPage>
    )
}