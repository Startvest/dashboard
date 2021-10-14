import { IonPage, IonButtons, IonToolbar, IonMenuButton, IonIcon, IonGrid, IonRow, IonCol, IonSearchbar, IonCard, IonCardContent, IonCardHeader, IonAvatar, IonButton } from "@ionic/react";
import { Img } from "../../components/Img";
import '../../pages/InvestorsView/styles/Invest.css';
import { checkmark } from 'ionicons/icons'
import { useState } from 'react'
import { IconCircle } from "../../components/IconCircle";
export function Invest(){
    
    const topbarStyle = {
        display:'flex', alignItems:'center', 
        backgroundColor:'#D3E2ED', width:'130%', 
        height:'2.5rem', padding:'0 10px'
    
    }

    const startupRequests = [
        {name:'Innovation Tech Hub', avatar:'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'},
        {name:'XYZ Ventures', avatar:"https://avatars.dicebear.com/api/identicon/logo-1.svg"},
        {name:"Sarah's Boutique", avatar:"https://avatars.dicebear.com/api/identicon/logo-2.svg"},

    ]

    const startupCampaigns = [
        {name:'Innovation Tech Hub', avatar:'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'},
        {name:'XYZ Ventures', avatar:"https://avatars.dicebear.com/api/identicon/logo-1.svg"},
        {name:'Godspower Ventures Limited', avatar:"https://avatars.dicebear.com/api/identicon/logo-2.svg"},

    ]
    return(
        <IonPage>
            <IonToolbar className="toolbar">
                <IonButtons>
                    <IonMenuButton menu="dashboard-menu"/>
                </IonButtons>
            </IonToolbar>
            
            <div style={{display:'flex', alignItems:'center', width:'100%'}}>
                <IonSearchbar className="searchbar" placeholder="Enter the name of a startup"/>
            </div>
            <IonGrid className="grid" id="grid-invest">
                <IonRow>
                    <div style={topbarStyle}>
                        Startup Requests
                    </div>
                    {startupRequests.map((element, index)=>{
                        return(
                            <IonCol size-sm="6" size-md="4" size-lg="4">
                                <IonCard>
                                    <IonCardContent>
                                        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                            <IonAvatar>
                                                <Img src={element.avatar}/>
                                            </IonAvatar>

                                            <IonCardHeader>
                                                {element.name}
                                            </IonCardHeader>
                                        </div>
                                        <div style={{display:'flex', alignItems:'center', justifyContent: 'flex-end', width: '100%', paddingRight:'15px'}}>
                                            <IonButton type="icon-only" color="success" id="btn-check">
                                                <IonIcon size="large" className="icon-check" icon={checkmark}/>
                                            </IonButton>
                                        </div>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        )
                    })}
                </IonRow>

                <IonRow>
                    <div style={topbarStyle}>
                        Campaigns raised by Startups
                    </div>
                    {startupCampaigns.map((element,index)=>{
                        return(
                            <IonCol size-sm="6" size-md="4" size-lg="4">
                                <IonCard key={index}>
                                    <IonCardContent>
                                        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                            <IonAvatar>
                                                <Img src={element.avatar}/>
                                            </IonAvatar>

                                            <IonCardHeader>
                                                {element.name}
                                            </IonCardHeader>

                                            <IonButton className="btn-details">View Details</IonButton>
                                        </div>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        )
                    })}

                </IonRow>
            </IonGrid>

        </IonPage>
    )
}