import '../../styles/fonts.css';
import { IonPage, IonMenuButton, IonButtons, IonGrid, IonRow, IonCol, IonCard, IonCardTitle,
    IonCardContent, IonIcon, IonButton } from "@ionic/react";
import { Toolbar } from "../../components/Toolbar"
import { IconCircle } from "../../components/IconCircle"
import { attach, cloudUpload, document, pencil } from "ionicons/icons"
import '../../styles/Documents.css'

export function Documents(){

    const contentStyle = {
        width: '100%',
        backgroundColor: '#D3E2ED',
        height: '100%'
    }

    return(
        <IonPage className="documents-page">
            <Toolbar>
                <IonButtons slot="start">
                    <IonMenuButton style={{margin:'auto'}}/>
                </IonButtons>
            </Toolbar>

            <div style={contentStyle}>
                <IonGrid>
                    <IonRow>
                        <IonCol size-md="12" size-lg="4">
                            <IonCard className="info-card">
                                <IonCardContent>
                                    <div style={{display: 'flex', gap:'3rem', alignitems:'center'}}>
                                        <div>
                                            <p>You are yet to upload your</p>
                                            <h3>{"Financial Statement"}</h3>
                                        </div>
                                        <IconCircle>
                                            <IonIcon className="btn-icon" color="dark" icon={attach}/>
                                        </IconCircle>
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>

                        <IonCol size-md="12" size-lg="8">
                            <IonCard>
                                <IonCardContent>
                                    <div>
                                        <IonCardTitle>Pitch Video</IonCardTitle>
                                        <div>
                                            <h6>
                                                A pitch video is not necessary but is highly recommended for
                                                you get fully recognized by top investors on our platform.
                                            </h6>

                                            <IonButton id="btn-upload">
                                                <IonIcon slot="start" icon={cloudUpload} />
                                                Click here to upload your pitch video
                                            </IonButton>
                                        </div>
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>

                    </IonRow>

                    <IonRow>
                        <IonCol size-md="12" size-lg="6">
                            <IonCard>
                                <IonCardContent>
                                    <div style={{display: 'flex', alignItems:'center', gap:'3em'}}>
                                        <IonCardTitle>Business Plan</IonCardTitle>
                                        <IconCircle>
                                            <IonIcon color="dark" icon={document} />
                                        </IconCircle>
                                    </div>
                                    <h6>
                                        Successfully completed and uploaded your business plan.
                                        This is the fundamental step that will enable you connect with investors.
                                        Well done! 🎉
                                    </h6>
                                    <div style={{display: 'flex', alignItems:'center', justifyContent: 'flex-end', gap:'2rem'}}>
                                        <IconCircle>
                                            <IonIcon color="dark" icon={pencil}/>
                                        </IconCircle>
                                        
                                        <IconCircle color="#358856">
                                            <IonIcon icon={cloudUpload}/>
                                        </IconCircle>
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size-sm="12" size-lg="6">
                            <IonCard>
                                <IonCardContent>
                                    <div style={{display: 'flex', alignItems:'center', justifyContent: 'flex-start'}}>
                                        <IonCardTitle>Certificate of Registration</IonCardTitle>

                                    </div>
                                    <h6>
                                        This document shows that your business has been registered
                                        under the appropriate authority to conduct business.
                                    </h6>
                                    <IonButton id="btn-upload">
                                        <IonIcon slot="start" icon={cloudUpload} />
                                        Click here to upload your certificate
                                    </IonButton>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </div>
            
            
        </IonPage>
    )
}