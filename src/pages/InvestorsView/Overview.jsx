import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonIcon, IonMenuButton, IonPage, IonRow, IonToolbar } from "@ionic/react";
import { IconCircle } from '../../components/IconCircle';
import { wallet, chevronForward } from 'ionicons/icons'
import './styles/Overview.css'
export function InvestorOverview(){

    const styleHorizontal = {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem'
    }

    let accountBalance = "250,000"
    return(
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton menu="investor-dashboard" />
                </IonButtons>
            </IonToolbar>

            <IonGrid className="grid">
                <IonRow>
                    <IonCol size-md="12" size-md="6" size-lg="4">
                        <IonCard className="balance-card">
                            <IonCardContent>
                                <div style={styleHorizontal}>
                                    <div>
                                        <p>Your balance</p>
                                        <h3><span>&#8358;</span>{accountBalance}</h3>
                                    </div>
                                    <IconCircle>
                                        <IonIcon color="dark" icon={wallet} />
                                     </IconCircle>
                                </div>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>

                    <IonCol size-md="12" size-md="6" size-lg="6">
                        <IonCard>
                            <IonCardContent>
                                <div style={styleHorizontal}>
                                    <div>
                                        <h3>Want to start investing right away?</h3>
                                        <h5>Get started</h5>
                                    </div>

                                    <IonButton slot="end" type="icon-only" id="btn-start">
                                        <IonIcon id="icon-start" icon={chevronForward}/>
                                    </IonButton>

                                </div>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>

                </IonRow>

                <IonRow>
                    <IonCol size-sm="12" size-md="6" size-lg="5">
                        <IonCard>
                            <IonCardContent>
                                <div>
                                    <IonCardHeader>
                                        Feeling Generous?😏
                                    </IonCardHeader>
                                    <p>Instanly deposit funds to your wallet using our secure payment platform</p>
                                
                                    <IonButton>
                                        Add Funds
                                    </IonButton>
                                </div>

                            </IonCardContent>
                        </IonCard>
                    </IonCol>

                    <IonCol size-sm="12" size-md="6" size-lg="8">
                        <IonCard>
                            <IonCardContent>
                                <div style={styleHorizontal}>
                                    <div>
                                        <h3 style={{fontWeight: 'bold'}}>Equity Crowd Funding, the future of investment?</h3>
                                        <h5>Get up to speed here</h5>
                                    </div>

                                    <IonButton slot="end" type="icon-only" id="btn-start">
                                        <IonIcon id="icon-start" icon={chevronForward}/>
                                    </IonButton>

                                </div>
                            </IonCardContent>
                        </IonCard>
                        
                    </IonCol>
                </IonRow>
            </IonGrid>

        </IonPage>
    )
}