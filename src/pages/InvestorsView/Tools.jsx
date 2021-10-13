import { IonButtons, IonMenuButton, IonPage, IonToolbar } from "@ionic/react";

export function InvestorTools(){

    return(
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton menu="investor-dashboard" />
                </IonButtons>
            </IonToolbar>

            <h3>Tools</h3>

        </IonPage>
    )
}