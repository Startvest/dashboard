import { IonButtons, IonMenuButton, IonPage, IonToolbar } from "@ionic/react";

export function InvestorAnalytics(){

    return(
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton menu="investor-dashboard" />
                </IonButtons>
            </IonToolbar>

            <h3>Analytics</h3>

        </IonPage>
    )
}