import { IonPage, IonMenuButton, IonButtons } from '@ionic/react';
import '../styles/fonts.css';

export function Campaign(){
    return(
        <IonPage>
           <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>

            <div className="content-area" style={{display: 'flex', flexDirection: 'column'}}>
               <h3>Create a fundraising campaign</h3>
            </div>
        </IonPage>
    )
}