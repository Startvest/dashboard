import { IonPage, IonMenuButton, IonButtons, IonGrid, IonCol, IonLabel, IonAvatar, IonButton, IonIcon, IonRow } from '@ionic/react';
import { Toolbar } from '../../components/Toolbar';
import { Img } from "../../components/Img";
import { mail, person, key, cash, call, logOut, cloudUpload } from 'ionicons/icons'
import '../../styles/fonts.css';
import './styles/Account.css';

export function Account(){

    let startupName = "Innovation Tech Hub"

    const accountOptions = [
        {name:'Verify your email', icon: mail},
        {name:'Account Settings', icon: person},
        {name:'Change Password', icon: key},
        {name:'Withdraw Funds', icon: cash},
        {name:'Contact Us', icon: call},
        {name:'Log Out', icon: logOut, id:'log-out', iconCol:'log-out-icon'},

    ]

    return(
        <IonPage>
            <Toolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
            </Toolbar>

            <div style={{height: "100%", background:"#D3E2ED", width:'100%'}}>
                <IonGrid className="grid" id="grid">
                    <IonRow>

                        <IonCol size-sm="12" size-lg="6">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                                <IonAvatar className="profile-pic">
                                    <Img style={{width: '70%', height: '70%'}} src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                                </IonAvatar>
                            
                                <h1 style={{fontSize:"20px"}}>{startupName}</h1>
                                
                                <IonButton className="btn-upload" id="btn-upload">
                                    <IonIcon slot="start" icon={cloudUpload}/>

                                    Upload Profile Picture
                                </IonButton>
                            </div>
                        </IonCol>

                        <IonCol size-sm="12" size-lg="6">
                            <div style={{display: 'flex', flexDirection:'column'}}>
                                {accountOptions.map((element, key) =>{
                                    return(
                                        <IonButton key={key} className="btn-account" id={element.id}>
                                            <IonIcon slot="start"  className="icon-acc" id={element.iconCol} icon={element.icon}/>
                                            <h3 style={{margin:'0'}}>{element.name}</h3>
                                        </IonButton>
                                    )
                                })}
                                
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                
            </div>
        </IonPage>
    )
}