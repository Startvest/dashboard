import styles from './styles/Settings.module.css';
import Image from '../../assets/images/unsplash_kWgKV2i9Xec.png';
import auth from '../../assets/images/auth.png';
import mail from '../../assets/images/mail.png';
import { useEffect, useState, useRef } from 'react';
import { IonContent, IonPage, IonToolbar, IonHeader, IonImg, IonInput,
    IonButtons, IonMenuButton,
    IonAvatar, IonSlide, IonSlides, IonSegment, IonSegmentButton, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { checkmarkCircle, add } from 'ionicons/icons';
import { Col, Row } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons'

export function Settings(){
    const [hasLoaded, setHasLoaded] = useState(false);
    const startupName = "Startup Name"
    const slideRef = useRef()
    const segmentRef = useRef()

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
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>

                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className={styles.startup_holder}>
                    <IonAvatar>
                        <IonImg src={Image}></IonImg>
                    </IonAvatar>
                    <span className={styles.startup}>
                        <h3>{startupName}</h3>
                        <span style={{color:'green'}}>
                            Verified
                            <CheckCircleFill />
                        </span>
                    </span>
                </div>
                <IonSegment ref={segmentRef} scrollable={true} onIonChange={(e)=>slideRef.current?.slideTo(e.detail.value)}>
                    {segments.map((segment,index)=>{
                        return(
                            <IonSegmentButton value={index} key={index}>
                                {segment.name}
                            </IonSegmentButton>
                        )
                    })}
                </IonSegment>

                <IonSlides ref={slideRef} 
                    onIonSlideDidChange={()=>{
                        slideRef.current?.getActiveIndex().then((num)=>{
                            segmentRef.current.value = num
                        })
                    }}>
                    <IonSlide>

                        <div className={styles.profile}>
                            <div className={styles.profile_section}>
                                <IonLabel>Business Name</IonLabel>
                                <IonInput
                                    placeholder="Enter Business name"/>

                                <IonLabel>Business Email</IonLabel>
                                <IonInput placeholder="Startup email"/>

                                <IonLabel>Industry</IonLabel>
                                <IonSelect multiple={true}>
                                    <IonSelectOption>Fintech</IonSelectOption>
                                    <IonSelectOption>Web 3</IonSelectOption>
                                    <IonSelectOption>A.I.</IonSelectOption>
                                </IonSelect>

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


                    </IonSlide >

                    <IonSlide>
                        <h1>sbdj</h1>
                    </IonSlide>

                    <IonSlide>
                        <h1>ayuyua</h1>
                    </IonSlide>

                    <IonSlide>
                        <h1>ayuyua</h1>
                    </IonSlide>

                    <IonSlide>
                        <h1>ayuyua</h1>
                    </IonSlide>

                    <IonSlide>
                        
                        <div className={styles.auth}>
                            <section className={styles.auth_section}>
                                <img style={{width:'52px',height:'50px'}} src={auth} alt="authenticator"/>
                                <div>
                                    <h3>Authentication App</h3>
                                    <p>
                                        <span style={{color:'green'}}>Recommended</span>
                                        Use an app like Google Authenticator
                                        or Duo Mobile to generate verification codes for more
                                        protection. 
                                    </p>

                                    <button>
                                        Use Authenticator App
                                    </button>
                                </div>

                            </section>

                            <section className={styles.auth_section}>
                                <img style={{width:'40px',height:'30px'}} src={mail} alt="mail"/>
                                <div>
                                    <h3>Email Verification</h3>
                                    <p>
                                        Use your business E-mail to receive verification codes. For 
                                        your protection, email used for two-factor authentication 
                                        can’t used to reset your password when two-factor is on.
                                    </p>

                                    <button>
                                        Use Email Verification
                                    </button>
                                </div>
                            </section>

                        </div>
                    </IonSlide>


                </IonSlides>



            </IonContent>
        </IonPage>
    )
}