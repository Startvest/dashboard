import styles from './styles/Settings.module.css';
import Image from '../../assets/images/unsplash_kWgKV2i9Xec.png';
import { useEffect, useState, useRef } from 'react';
import { IonContent, IonPage, IonToolbar, IonHeader, IonImg, IonInput,
    IonAvatar, IonSlide, IonSlides, IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";
import { checkmarkCircle, add } from 'ionicons/icons';
import { Col, Row } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons'

export function Settings(){
    const [hasLoaded, setHasLoaded] = useState(false);
    const startupName = "Startup Name"
    const slideRef = useRef()

    useEffect(()=>{
        setHasLoaded(!hasLoaded)
    }, [])


    const segments = [
        {name: "Profile"},
        {name: "Account"},
        {name: "Appearance"},
        {name: "Plan"},
        {name: "Billing"},
        {name: "2FA Authentication"},

    ]

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
                <IonSegment onIonChange={(e)=>slideRef.current?.slideTo(e.detail.value)}>
                    {segments.map((segment,index)=>{
                        return(
                            <IonSegmentButton value={index} key={index}>
                                {segment.name}
                            </IonSegmentButton>
                        )
                    })}
                </IonSegment>

                <IonSlides ref={slideRef}>
                    <IonSlide>

                        <div className={styles.profile}>
                            <div className={styles.profile_section}>
                                <IonLabel>Business Name</IonLabel>
                                <IonInput
                                    placeholder="Enter Business name"/>

                                <IonLabel>Business Email</IonLabel>
                                <IonInput placeholder="Startup email"/>

                                <IonLabel>Industry</IonLabel>
                                <IonInput placeholder="Startup email"/>

                            </div>
                            <div className={styles.profile_section}>
                                <IonLabel>Business Number</IonLabel>
                                <IonInput placeholder="Enter Business name"/>

                                <IonLabel>Business Location</IonLabel>
                                <IonInput placeholder="Startup email"/>

                                <IonLabel>Business Email</IonLabel>
                                <IonInput placeholder="Startup email"/>

                            </div>
                        </div>

                    </IonSlide>

                    <IonSlide>
                        <h1>sbdj</h1>
                    </IonSlide>

                    <IonSlide>
                        <h1>ayuyua</h1>
                    </IonSlide>

                </IonSlides>



            </IonContent>
        </IonPage>
    )
}