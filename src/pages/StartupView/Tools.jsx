import '../../styles/fonts.css';
import { IonPage, IonMenuButton, IonButtons, IonToolbar } from "@ionic/react";

export function Tools(){

    return(
        <IonPage>
            <IonToolbar>
                
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
            </IonToolbar>
            
            <h3>Tools</h3> 

            <h1>welcome</h1>
        </IonPage>
    )
}