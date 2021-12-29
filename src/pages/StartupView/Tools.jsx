import '../../styles/fonts.css';
import styles from '../../styles/Tools.css';
import Image1 from '../../assets/images/ai-analytics.png'
import Image2 from '../../assets/images/survey.png'
import { IonPage, IonMenuButton, IonButtons, IonToolbar, IonContent, IonCard, IonCardContent } from "@ionic/react";
import { Container, Col , Row, Card, CardImg, Button } from "react-bootstrap";
import {BellFill, ChatLeftTextFill, Person, CaretDown} from "react-bootstrap-icons";


export function Tools(){

    return(
        <IonPage className="page">
            <IonContent className="page-content">
                <IonToolbar>
                    
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <Container className='container shadow-sm'>
                        <Row>
                            <Col>
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

                <div className="page-container">
                    <h2>Pro Tools</h2>
                    <p>Here are some pro tools to boost your startup.</p>
                    <Row style={{margin: '15px 0'}}>
                        <Col xs={12} md={12} lg={{span:'4', offset:'1'}}>
                            <Card>
                                <div class="img-holder">
                                    <CardImg src={Image1}></CardImg>
                                </div>
                                <Card.Body>
                                    <Card.Title>AI Business Analytics</Card.Title>
                                    <Card.Text>
                                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Neque verstibulum sed diam
                                        sed lectus. Ultrices sed diam cum aliquam, vivera est. Est dictrum sapien condimentum
                                        et tellus, uma eiget vitas
                                    </Card.Text>

                                    <span style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                                        <Button className="btn-try">Try It</Button>
                                    </span>
                                </Card.Body>
                                
                            </Card>                        
                        </Col>

                        <Col xs={12} md={12} lg={{span:'4', offset:'2'}}>
                            <Card>
                                <div className="img-holder">
                                    <CardImg src={Image2}></CardImg>
                                </div>
                                <Card.Body>
                                    <Card.Title>Customer Survey</Card.Title>
                                    <Card.Text>
                                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Neque verstibulum sed diam
                                        sed lectus. Ultrices sed diam cum aliquam, vivera est. Est dictrum sapien condimentum
                                        et tellus, uma eiget vitas
                                    </Card.Text>

                                    <span style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                                        <Button className="btn-try">Try It</Button>
                                    </span>
                                </Card.Body>

                            </Card>                        
                        </Col>

                    </Row>
                </div>
                

            </IonContent>
            
        </IonPage>
    )
}