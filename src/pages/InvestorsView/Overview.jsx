import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonIcon, IonMenuButton, IonContent, IonPage, IonRow, IonToolbar } from "@ionic/react";
import { Container, Col , Row, Dropdown} from "react-bootstrap";
import {BellFill, ChatLeftTextFill, Person, CaretDown} from "react-bootstrap-icons";

// Ionic Imports
// import {ToolbarItem, DropdownItem, DropdownMenu} from "../../components/Toolbar";
// import {caretDownOutline, settings, lockClosed, logOut} from 'ionicons/icons';
import './styles/Overview.css'
export function InvestorOverview(){

    return(
        <IonPage className='page'>
            <IonContent>
            <IonToolbar >
                <IonButtons slot="start">
                    <IonMenuButton menu="investor-dashboard" />
                </IonButtons>
                
                <Container className='container shadow-sm'>
                <Row>
                    <Col >Hello Startup</Col>
                    <Col xs={'auto'} className='toolbar-icon-cont ml-auto'>
                        <ChatLeftTextFill className='toolbar-icon'/>
                        <BellFill className='toolbar-icon'/>
                        <Person className='toolbar-icon'/><CaretDown/>
                    </Col>
                   
                </Row>
                </Container>
            </IonToolbar>

           <div className='overview-main'>
               <p>Today is another good day to get funding!</p>
                <Container>
                    <Row className='headline-row'>
                        <Col xs={4} className='headline-cont'>
                        </Col>

                        <Col xs={4} className='headline-cont'>
                        </Col>

                        <Col xs={4} className='headline-cont'>
                        </Col>

                        <Col xs={4} className='headline-cont'>
                        </Col>

                        <Col xs={4} className='headline-cont'>
                        </Col>
                    </Row>
                </Container>
           </div>
            </IonContent>
        </IonPage>
    )
}