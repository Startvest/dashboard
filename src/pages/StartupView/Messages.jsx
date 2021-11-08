import '../../styles/fonts.css';
import '../../styles/Messages.css';
import { IonPage, IonMenuButton, IonButtons, IonList, IonSearchbar, IonItem, IonAvatar, IonLabel, IonIcon, IonSegmentButton, IonContent, IonSlides, IonSlide } from "@ionic/react";
import { IonSegment } from "@ionic/react"
import { ellipsisVertical } from 'ionicons/icons'
import { useState, useRef } from 'react';
import { Img } from '../../components/Img';
import { Toolbar } from '../../components/Toolbar';
import { MessagePage } from '../../components/MessagePage';

export function Messages(){

    const [searchText, setSearchText] = useState();


    const messages = require('./dummyMessages.json');
    for(let i=0; i<messages.jobSeekers.length; i++){
        messages.jobSeekers[i].url = `/candiates/${messages.jobSeekers[i].sender}`
    }
    
    const [value, setValue] = useState("0");

  

    

    return(
        <IonPage>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            <div class="content-area" id="message-area">
                <div className="message-panel">
                    <IonList>
                        <IonSearchbar value={searchText} 
                        onIonChange={e => setSearchText()} showCancelButton="focus"/>
                        <IonSegment mode="md" swipeGesture="true" value={"candidates"}>
                            <IonSegmentButton value="candidates">
                                <IonLabel>Candidates</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="investors">
                                <IonLabel>Investors</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                        {messages.jobSeekers.map((message,index)=>{
                            return(
                                <IonItem className='not-selected' lines="full">
                                    <IonAvatar slot="start">
                                        <Img src={message.profilePicture}/>
                                    </IonAvatar>
                                    <IonLabel>
                                        <h2 style={{fontWeight: 'bold'}}>{message.sender}</h2>
                                        <h4>{message.subject}</h4>
                                        <p>{message.content.slice(0, 38)+'...'}</p>
                                    </IonLabel>
                                </IonItem>
                            )
                        })}
                    </IonList>

                </div>

                <div className="message-area">
                    <MessagePage />
                </div>
            </div>
            
            
        </IonPage>
    )
}