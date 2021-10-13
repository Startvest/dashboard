import { IonPage, IonMenuButton, IonButtons } from '@ionic/react';
import { Toolbar } from '../components/Toolbar';
import '../styles/fonts.css';
import '../styles/Account.css';

export function Account(){
    return(
        <IonPage>
            <Toolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
            </Toolbar>
            <div style={{height: "100%", background:"#D3E2ED",}}>
                
            </div>
        </IonPage>
    )
}