import { IonButtons, IonMenuButton, IonPage, IonToolbar } from "@ionic/react";

export function InvestorOverview(){

    return(
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton menu="investor-dashboard" />
                </IonButtons>
            </IonToolbar>

            <h3>Overview</h3>

        </IonPage>
    )
}