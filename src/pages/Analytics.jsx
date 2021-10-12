import '../styles/fonts.css';
import '../styles/Analytics.css'
import { IonPage, IonMenuButton, IonButtons, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonIcon } from "@ionic/react";
import { Toolbar } from '../components/Toolbar';
import { barChart } from "ionicons/icons"

export function Analytics(){
    const contentStyle = {
        width: '100%',
        backgroundColor: '#D3E2ED',
        height: '100%'
    }

    const mainFigureStyle = {
        fontSize: '50px',
        fontFamily: 'Montserrat'
    }
    return(
        <IonPage>
            <Toolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
            </Toolbar>

            <div style={contentStyle}>
                <IonGrid>
                    <IonRow>
                        <IonCol size-sm="12" size-md="6" size-lg="4">
                            <IonCard>
                                <IonCardContent>
                                    <div style={{display: 'flex'}}>
                                        <div>
                                            <p>Profile Visits</p>
                                            <h3 style={mainFigureStyle}>1,284</h3>
                                        </div>

                                        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center', margin:'0 15px 0 auto'}}>
                                            <IonIcon id="progress" size="large" icon={barChart}/>
                                            <h6 style={{color:'#177a3f', fontWeight:'bold'}}>{"+261%"}</h6>
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
                                            <p>Job Candidates</p>
                                            <h3 style={mainFigureStyle}>187</h3>
                                        </div>

                                        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center', margin:'0 15px 0 auto'}}>
                                            <IonIcon id="progress" size="large" icon={barChart}/>
                                            <h6 style={{color:'#177a3f', fontWeight:'bold'}}>{"+57%"}</h6>
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
                                            <p>Connected Investors</p>
                                            <h3 style={mainFigureStyle}>3</h3>
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