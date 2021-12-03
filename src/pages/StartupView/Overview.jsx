import { useState } from "react";
import { IonPage, IonContent, IonButtons, IonMenuButton, IonToolbar } from "@ionic/react";
import { Container, Col , Row, DropdownButton, Dropdown, Stack, Button} from "react-bootstrap";
import '../../styles/fonts.css';
import '../../styles/Overview.css';
import '../../styles/Toolbar.css';
import '../../styles/card.css';

import {BellFill, ChatLeftTextFill, Person, CaretDown} from "react-bootstrap-icons";


export function Overview(){
    
    const rotateStyle = {
        transform: 'rotate(90deg)',
    }
    const [toggle, setToggle] = useState(false);

    if(toggle===true) {
        rotateStyle.transform = 'rotate(90deg)'
    } else {
        rotateStyle.transform = 'rotate(-90deg)'
    }

    // Data for the headline banners
    const BannerData = {
        "b1": {
            "name": "Headline 1",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
            "color": "green"
        },
        "b2": {
            "name": "Headline 2",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
            "color": "orange"
        },
        "b3": {
            "name": "Headline 3",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
            "color": "blue"
        },
        "b4": {
            "name": "Headline 4",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
            "color": "red"
        },
    }

    const setupList = [
        'Add Company Logo',
        'Connect BVN to be listed',
        'Submit CAC incoperation certificate',
        'Take our AI test'
    ]

    const investors = [
        ['Hanif Adedotun', 'Yesterday', 'N50,000'],
        ['Kevin Durant', '1 week ago', 'N20,000'],
        ['Virgil Abloh', '1 week ago', 'N150,000'],
        ['Kelvin Sapa', '2 weeks ago', 'N500,000'],
        ['Okorite Victor', '2 weeks ago', 'N250,000'],
    ]

    // Data for if the user has not finished the setup process
    const [setup, setSetup] = useState(true);


    return(
        <IonPage className='page'>
        <IonContent>
            <IonToolbar >
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                
                <Container className='container shadow-sm'>
                <Row>
                    <Col >
                        <span className="salutation">Good evening, Startup</span>
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
               <p className='overview-tag'>Today is another good day to get funding!</p>
                
                <Stack direction="horizontal" gap={3} className="ban-stack">
                    {Object.values(BannerData).map((b, key) => (
                        <div key={key} className="banner-cont shadow-sm" style={{backgroundColor: b.color}}>
                         <h1 className='banner-head'>{b.name}</h1>
                         <p>{b.content}</p>
                       </div>
                    ))}  
                </Stack>

                <Row className="overview-row2">
                    {(setup) ? 
                        <Col xs={6} className='setup'>
                            <h1 className='ohead'>Finish your account setup</h1>
                            <ul>
                                {setupList.map((s, key) => 
                                    <li key={key} className='setup-list'><input type="checkbox"/> {s}</li>
                                )} 
                            </ul>
                        </Col>
                    : null}

                    <Col xs={6} className='quick-campaign'>
                        <div className='qc-card'>
                            <p>Quickly set up  fund raising round in a couple of seconds</p>
                            <Button className='shadow-sm'>New Campaign</Button>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={8}>
                        <h1 className='ohead'>Your previous investors</h1>
                        
                        <table className='investors'>
                            {investors.map((row,ri) => 
                                <tr className='investors-row' key={ri}>
                                    {row.map((cell, ci) => 
                                        <td className='investors-cell' key={ci}>{cell}</td>
                                    )}
                                </tr>
                            )}
                            
                        </table>
                    </Col>
                </Row>

           </div>
            </IonContent>
        </IonPage>
    )
}