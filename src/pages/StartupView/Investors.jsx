import '../../styles/fonts.css';
import styles from '../../styles/Investors.module.css';
import { IonAvatar, IonLabel, IonButtons, IonMenuButton, IonPage, IonItem,
    IonContent, IonToolbar, IonSearchbar, IonImg, IonList, IonListHeader } from "@ionic/react";
import { Container, Col , Row, ListGroup, Dropdown, Stack, Button, ListGroupItem} from "react-bootstrap";
import {BellFill, ChatLeftTextFill, Person, CaretDown} from "react-bootstrap-icons";

export function Investors(){

    const horizontalCards = {
        display:'flex', alignItems: 'center', justifyContent: 'flex-start', gap:'15px', height:'30px'
    }

    const cardContentStyle = {
        height: '45%'
    }

    if(window.innerWidth > 768){
        let toolbarClass = 'container shadow-sm'
    } else {
        let toolbarClass = 'container'
    }
    const investors = [
        {
            name: 'Investor Sabinus',
            amount: 50000,
            timeStamp: `${new Date().getMinutes()} minutes ago`,
            description: 'Fintech, Blockchain and Artificial Intelligence',
            image: "https://avatars.dicebear.com/api/initials/InvestorSabinus.svg",
        },
        {
            name: 'Investor Sabinus',
            amount: 50000,
            timeStamp: `${new Date().getMinutes()} minutes ago`,
            description: 'Fintech, Blockchain and Artificial Intelligence',
            image: "https://avatars.dicebear.com/api/initials/InvestorSabinus.svg",
        },
        {
            name: 'Investor Sabinus',
            amount: 50000,
            timeStamp: `${new Date().getMinutes()} minutes ago`,
            description: 'Fintech, Blockchain and Artificial Intelligence',
            image: "https://avatars.dicebear.com/api/initials/InvestorSabinus.svg",
        },
        {
            name: 'Investor Sabinus',
            amount: 50000,
            timeStamp: `${new Date().getMinutes()} minutes ago`,
            description: 'Fintech, Blockchain and Artificial Intelligence',
            image: "https://avatars.dicebear.com/api/initials/InvestorSabinus.svg",
        },
        {
            name: 'Investor Sabinus',
            amount: 50000,
            timeStamp: `${new Date().getMinutes()} minutes ago`,
            description: 'Fintech, Blockchain and Artificial Intelligence',
            image: "https://avatars.dicebear.com/api/initials/InvestorSabinus.svg",
        },
        {
            name: 'Investor Sabinus',
            amount: 50000,
            timeStamp: `${new Date().getMinutes()} minutes ago`,
            description: 'Fintech, Blockchain and Artificial Intelligence',
            image: "https://avatars.dicebear.com/api/initials/InvestorSabinus.svg",
        },


    ];

    return(
        <IonPage className="page">
            <IonContent>

                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>

                    <Container className={window.innerWidth > 768?'container shadow-sm':'container'}>
                    <Row>
                        <Col >
                            <span className="salutation"></span>
                        </Col>
                        <Col xs={'auto'} className='toolbar-icon-cont ml-auto'>
                            <ChatLeftTextFill className='toolbar-icon'/>
                            <BellFill className='toolbar-icon'/>
                            <Person className='toolbar-icon'/><CaretDown/>
                        </Col>
                    
                    </Row>
                    </Container>

                </IonToolbar>
                
                <div className='overview-main'>
                    <IonLabel id="label">
                        <h2>Investors in your startup</h2>
                        <p>Showing {investors.length} investors</p>
                    </IonLabel>

                    <div className="investors-details">
                        <IonSearchbar id="searchbar"></IonSearchbar>

                        <IonList className="investors-list">
                            <IonListHeader>
                                <Container>
                                    <Row>
                                        <Col xs={1}></Col>
                                        <Col lg={3} className="heading">Name</Col>
                                        <Col lg={4} className="heading">Description</Col>
                                        <Col xs={1} className="heading">Price</Col>
                                        <Col lg={3} className="heading">Time</Col>
                                    </Row>
                                </Container>
                            </IonListHeader>
                            { investors.map((investor) => (
                                <ListGroupItem>
                                    <Row>
                                        <Col xs={3}>
                                            <IonAvatar slot="start">
                                                <IonImg src={investor.image}></IonImg>
                                            </IonAvatar>                                        
                                        </Col>
                                        <Col xs={9} lg={3}>
                                            <h5 className="investor-entry">{investor.name}</h5>    
                                        </Col>
                                        <span className="investor-extra">
                                            <Col xs={0} lg={4}>
                                                <p>{investor.description.slice(0, 28)+'...'}</p>                                        
                                            </Col>
                                            <Col xs={0} lg={1}>
                                                <p>{investor.amount}</p>
                                            </Col>
                                            <Col xs={0} lg={3}>
                                                <p>Invested {investor.timeStamp}</p>
                                            </Col>
                                        </span>

                                    </Row>
                                </ListGroupItem>
                            ))}
                        
                        </IonList>

                    </div>





                </div>
            </IonContent>
        </IonPage>
    )
}