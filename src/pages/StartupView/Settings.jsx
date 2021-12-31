import './styles/Settings.css';
import Image from '../../assets/images/unsplash_kWgKV2i9Xec.png';
import { IonContent, IonPage, IonToolbar, IonHeader, IonImg, IonAvatar, IonIcon } from "@ionic/react";
import { checkmarkCircle, add } from 'ionicons/icons';
import { Col, Row } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons'

export function Settings(){

    const startupName = "Startup Name"

    return(
        <IonPage className="page">
            <IonHeader>
                <IonToolbar>

                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Row>
                    <Col xs={4}>
                        <IonAvatar>
                            <IonImg src={Image}></IonImg>
                        </IonAvatar>
                    </Col>
                    <Col>
                        <span>{startupName}</span>
                        <span style={{color:'green'}}>
                            Verified
                            <CheckCircleFill />
                        </span>
                    </Col>
                </Row>


            </IonContent>
        </IonPage>
    )
}