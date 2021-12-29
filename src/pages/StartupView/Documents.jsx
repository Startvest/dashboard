import '../../styles/fonts.css';
import { IonPage, IonMenuButton, IonButtons, IonGrid, IonRow, IonCol, IonCard, IonCardTitle, IonToolbar,
    IonCardContent, IonIcon, IonButton, IonContent } from "@ionic/react";
import { Container, Col , Row, Card, CardImg, Button } from "react-bootstrap";
import { document } from 'ionicons/icons';
import {BellFill, ChatLeftTextFill, Person, CaretDown, FileEarmarkTextFill} from "react-bootstrap-icons";
import { IconCircle } from "../../components/IconCircle"
import '../../styles/Documents.css';
import Image from '../../assets/images/document.png'
export function Documents(){

    const contentStyle = {
        width: '100%',
        backgroundColor: '#D3E2ED',
        height: '100%'
    }

    return(
        <IonPage className="page">
            <IonContent>
                <IonToolbar id="toolbar">
                    
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

                <div className="documents-page">
                    <h2>Upload Documents</h2>
                    <p>
                        We need your documents to confirm your identity
                        and security checks.
                    </p>

                    <Row>
                        <Col xs={12} sm={12} lg={3}>
                            <Card>
                                <Card.Body>
                                    <span className="whiteblock" style={{ background:'#fff'}}>
                                        <img src={Image}></img>
                                    </span>

                                    <span className="whiteblock" style={{flexDirection: 'column', justifyContent: 'center'}}>
                                        <select name="document">
                                            <option value="nin-slip">NIN Slip</option>
                                        </select>

                                        <label htmlFor="file-upload" className="btn-upload">
                                            <FileEarmarkTextFill />
                                            Upload
                                        </label>
                                        <input type="file" name="file" id="file-upload" hidden="true"/>
                                    </span>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} sm={12} lg={3}>
                            <Card>
                                <Card.Body>
                                    <span className="whiteblock" style={{ background:'#fff'}}>
                                        <img src={Image}></img>
                                    </span>

                                    <span className="whiteblock" style={{flexDirection: 'column', justifyContent: 'center'}}>
                                        <select name="document">
                                            <option value="nin-slip">NIN Slip</option>
                                        </select>

                                        <label htmlFor="file-upload" className="btn-upload">
                                            <FileEarmarkTextFill />
                                            Upload
                                        </label>
                                        <input type="file" name="file" id="file-upload" hidden="true"/>
                                    </span>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col xs={12} sm={12} lg={3}>
                            <Card>
                                <Card.Body>
                                    <span className="whiteblock" style={{ background:'#fff'}}>
                                        <img src={Image}></img>
                                    </span>

                                    <span className="whiteblock" style={{flexDirection: 'column', justifyContent: 'center'}}>
                                        <select name="document">
                                            <option value="nin-slip">NIN Slip</option>
                                        </select>

                                        <label htmlFor="file-upload" className="btn-upload">
                                            <FileEarmarkTextFill />
                                            Upload
                                        </label>
                                        <input type="file" name="file" id="file-upload" hidden="true"/>
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