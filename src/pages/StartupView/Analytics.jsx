import '../../styles/fonts.css';
import '../../styles/Analytics.css'
import { IonPage, IonMenuButton, IonButtons, IonToolbar, IonCard, IonCardContent, IonIcon, IonImg, IonContent } from "@ionic/react";
import { Toolbar } from '../../components/Toolbar';
import { barChart } from "ionicons/icons"
import { Img } from '../../components/Img';
import Image from '../../assets/images/analytics-empty.png';

export function Analytics(){
    const analytics = [];
    const contentStyle = {
        width: '100%',
        backgroundColor: '#D3E2ED',
        height: '100%'
    }

    const mainFigureStyle = {
        fontSize: '50px',
        fontFamily: 'Montserrat'
    }

    const emptyAnalyticsStyle = {
        display: 'flex', 
        alignItems:'center', 
        justifyContent: 'center',
        flexDirection: 'column',
    }
    
    if(analytics.length === 0){

        return(
            <IonPage className="page">
                <IonContent>
    
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
    
                    </IonToolbar>
    
                    <div id="empty-analytics">
                        <img src={Image} id="image" alt="image"></img>
                        <p>Sorry, you have no investment to analyze</p>
                    </div>
    
                </IonContent>
            </IonPage>
    
        )
    } else {
        return(
            <IonPage className="page">
                <IonContent>
    
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                    </IonToolbar>

                    
                </IonContent>
            </IonPage>
        )
    }
    
}