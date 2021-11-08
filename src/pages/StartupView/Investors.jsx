import '../../styles/fonts.css';
import '../../styles/Investors.css'
import { IonAvatar, IonButton, IonButtons, IonIcon, IonMenuButton, IonPage } from "@ionic/react";
import { add } from 'ionicons/icons'
import { Card, CardContent } from '../../components/card';
import { Img } from '../../components/Img';

export function Investors(){

    const horizontalCards = {
        display:'flex', alignItems: 'center', justifyContent: 'flex-start', gap:'15px', height:'30px'
    }

    const cardContentStyle = {
        height: '45%'
    }

    const data = require('./dummyMessages.json');
    const investors = data.investors;

    return(
        <IonPage>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            
            <div className="content-area" style={{display: 'flex', flexDirection: 'column'}}>
                <h2>Investors you have connected with</h2>
                <div id="content-investors">
                    {investors.map((element)=>{
                        return(
                            <Card color="#fff" width="70%">
                                <CardContent style={cardContentStyle}>
                                    <IonAvatar>
                                        <Img src={element.profilePicture}/>
                                    </IonAvatar>

                                    <h3>{element.sender}</h3>
                                </CardContent>
                            </Card>

                        )
                    })}
                </div>

                <IonButton className="btn-add">
                    <IonIcon slot="start" icon={add} />
                    Connect to More Investors
                </IonButton>
            </div>
        </IonPage>
    )
}