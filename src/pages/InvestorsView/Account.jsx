import { IonButtons, IonMenuButton, IonPage, IonToolbar } from "@ionic/react";

export function InvestorAccount(){

    return(
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton menu="investor-dashboard" />
                </IonButtons>
            </IonToolbar>

            <h3>Account</h3>

        </IonPage>
    )
}