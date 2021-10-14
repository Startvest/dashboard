import { IonButtons, IonMenuButton, IonPage, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonIcon } from "@ionic/react";
import { barChart } from "ionicons/icons"


export function InvestorAnalytics(){

    const contentStyle = {
        width: '100%',
        backgroundColor: '#D3E2ED',
        height: '100%'
    }

    const mainFigureStyle = {
        fontSize: '50px',
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
    }

    return(
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton menu="investor-dashboard" />
                </IonButtons>
            </IonToolbar>

            <div style={contentStyle}>
                <IonGrid>
                    <IonRow>
                        <IonCol size-sm="12" size-md="6" size-lg="4">
                            <IonCard>
                                <IonCardContent>
                                    <div style={{display: 'flex'}}>
                                        <div>
                                            <p>Profile Visits</p>
                                            <h3 style={mainFigureStyle}>163</h3>
                                        </div>

                                        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center', margin:'0 15px 0 auto'}}>
                                            <IonIcon id="progress" size="large" icon={barChart}/>
                                            <h6 style={{color:'#177a3f', fontWeight:'bold'}}>{"+21%"}</h6>
                                        </div>
                                        
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>

                        <IonCol size-sm="12" size-md="6" size-lg="4">
                            <IonCard>
                                <IonCardContent>
                                    <div style={{display: 'flex'}}>
                                        <div>
                                            <p>Requests for Investment</p>
                                            <h3 style={mainFigureStyle}>3</h3>
                                        </div>

                                        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center', margin:'0 15px 0 auto'}}>
                                            <IonIcon id="progress" size="large" icon={barChart}/>
                                            <h6 style={{color:'#177a3f', fontWeight:'bold'}}>{"+37%"}</h6>
                                        </div>
                                        
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>

                        <IonCol size-sm="12`" size-md="6" size-lg="4">
                            <IonCard>
                                <IonCardContent>
                                    <div style={{display: 'flex'}}>
                                        <div>
                                            <p>Connected Startups</p>
                                            <h3 style={mainFigureStyle}>{"1"}</h3>
                                        </div>

                                        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center', margin:'0 15px 0 auto'}}>
                                            <IonIcon color="dark" size="large" icon={barChart}/>
                                            <h6 style={{color:'#222428', fontWeight:'bold'}}>{"+0%"}</h6>
                                        </div>
                                        
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size-sm="12" size-md="6" size-lg="4">
                            <IonCard>
                                <IonCardContent>
                                    <div style={{display: 'flex'}}>
                                        <div>
                                            <p>Average ROI</p>
                                            <h3 style={mainFigureStyle}>{"37%"}</h3>
                                        </div>

                                        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center', margin:'0 15px 0 auto'}}>
                                            <IonIcon color="dark" size="large" icon={barChart}/>
                                            <h6 style={{color:'#222428', fontWeight:'bold'}}>{"+0%"}</h6>
                                        </div>
                                        
                                    </div>
                                </IonCardContent>
                            </IonCard>

                        </IonCol>
                    </IonRow>
                </IonGrid>

            </div>
        </IonPage>
    )
}