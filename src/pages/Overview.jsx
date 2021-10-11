import { IonPage, IonContent, IonButtons, IonMenuButton, IonList, IonItem, IonIcon } from "@ionic/react";
import { Toolbar, ToolbarItem, DropdownMenu, DropdownItem } from "../components/Toolbar";
import '../styles/fonts.css';
import '../styles/Overview.css';
import '../styles/Toolbar.css';
import { caretDownOutline, logOut, settings, lockClosed, chevronForward, calendar, cash,
    briefcase, notificationsOutline, add, ellipsisVertical, megaphone, statsChart, warning } from 'ionicons/icons'
import { Card, CardContent } from '../components/card'
import '../styles/card.css'
import { IconCircle } from "../components/IconCircle";
import { useState } from "react";

export function Overview(){
    
    const fontStyle = {
        margin: 0,
    }

    const listStyle = {
        width: '100%',
        listStyleType: 'none',
        padding: '0',
        transform: 'translateX(-5px)'
    }

    const itemStyle = {
        width: '100%', height: '45px',
        display: 'flex', justifyContent: 'center',
        alignItems: 'center', padding: '0 7px 0 7px',

    }

    const horizontalCards = {
        display:'flex', alignItems: 'center', justifyContent: 'flex-start', gap:'15px', height:'30px'
    }

    const rotateStyle = {
        transform: 'rotate(90deg)',
    }
    const [toggle, setToggle] = useState(false);

    if(toggle===true) {
        rotateStyle.transform = 'rotate(90deg)'
    } else {
        rotateStyle.transform = 'rotate(-90deg)'
    }

    
    var link = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
    return(
        <IonPage>
            <IonContent>
                <Toolbar>
                    <IonButtons slot="start" className='btn-menu'>
                        <IonMenuButton />
                    </IonButtons>
                    <li>
                        <IconCircle color="#fff">
                            <IonIcon color="#21295C" icon={notificationsOutline}/>
                        </IconCircle>
                    </li>
                    <ToolbarItem className="profile" url={link} iconRight={caretDownOutline}>
                       <DropdownMenu>
                           <DropdownItem icon={settings}>
                                Settings
                           </DropdownItem>

                           <DropdownItem icon={lockClosed}>
                               2FA Security
                           </DropdownItem>

                           <DropdownItem icon={logOut}>
                               Log Out
                           </DropdownItem>

                       </DropdownMenu>
                   </ToolbarItem>
                </Toolbar>






                <div className="content-area">
                    <div className="row row-1">
                        <Card color="#ffffff" width="80%">
                            <CardContent align="left" orientation="horizontal">
                                <div>
                                    <p style={{fontSize: '12px', margin:'15px 0 3px 10px'}}>Your balance</p>
                                    <h2 style={{fontSize: '23px', margin:'0 0 15px 10px'}}>N150,783</h2>                                
                                </div>
                                <div style={{margin:'auto 10px auto auto'}}>
                                    <IconCircle>
                                        <IonIcon color="dark" icon={cash} />
                                    </IconCircle>
                                </div>
                            </CardContent>
                        </Card>
                        <div className="row-1-inner">
                            <Card color="#ffffff" width="500px">
                                <CardContent>
                                    <div style={horizontalCards}>

                                        <IconCircle>
                                            <IonIcon color="dark" icon={megaphone}/>
                                        </IconCircle>
                                        <h3>Upcoming Campaigns</h3>

                                        <IonButtons onClick={()=>setToggle(!toggle)}>
                                            <IconCircle style={rotateStyle}>
                                                <IonIcon color="dark" icon={chevronForward}/>
                                            </IconCircle>

                                        </IonButtons>
                                    </div>

                                    <p>Statement to Investors</p>
                                </CardContent>
                            </Card>

                            <div style={{display: 'flex'}}>

                                <Card color="#ffffff" width="58%">
                                    <CardContent>
                                        <div style={horizontalCards}>
                                            <IconCircle>
                                                <IonIcon color="dark" icon={statsChart}/>
                                            </IconCircle>
                                            <h3>Get Statistical Data</h3>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card color="#ffffff" width="38%">
                                    <CardContent>
                                       
                                    </CardContent>
                                </Card>

                            </div>
                        </div>
                    </div>



                    <div className="row row-2">
                        <Card color="#ffffff" width="30%" style={{height:'fit-content'}}>
                            <CardContent>
                                <div style={horizontalCards}>
                                    <h3>Important</h3>
                                    <IconCircle>
                                        <IonIcon color="warning" icon={warning} />
                                    </IconCircle>
                                </div>
                                <ul style={listStyle}>
                                    <li style={itemStyle}>
                                        <div style={{width:"100%"}}>
                                            <h4 style={fontStyle}>CAC Certification</h4>
                                            <p style={fontStyle}>Category: Documents</p>
                                        </div>
                                        <IonIcon size="large" color="dark" icon={chevronForward} />
                                    </li>
                                    <li style={itemStyle}>
                                        <div style={{width:"100%"}}>
                                            <h4 style={fontStyle}>Upload Profile Picture</h4>
                                            <p style={fontStyle}>Category: Profile</p>
                                        </div>
                                        <IonIcon size="large" color="dark" icon={chevronForward} />
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card color="#ffffff" width="30%">
                            <CardContent>
                                <div style={horizontalCards}>
                                    <h3>Calender</h3>
                                    <IconCircle>
                                        <IonIcon color="dark" icon={calendar} />
                                    </IconCircle>
                                </div>
                                
                            </CardContent>
                        </Card>

                        <Card color="#ffffff">
                            <CardContent>
                                <div style={{display:'flex', alignItems: 'center', justifyContent: 'flex-start', gap:'15px', height:'30px'}}>
                                    <h3>Job Postings</h3>
                                    <IconCircle>
                                        <IonIcon color="dark" icon={briefcase}/>
                                    </IconCircle>
                                </div>
                                <ul style={listStyle}>
                                    <li id="list-item" style={itemStyle}>
                                        <h3>Marketing Manager</h3>
                                        <IonIcon className="end-icon" color="dark" icon={ellipsisVertical}/>
                                    </li>
                                    <li id="list-item" style={itemStyle}>
                                        <h3>Salesperson</h3>
                                        <IonIcon className="end-icon" color="dark" icon={ellipsisVertical}/>                                        
                                    </li>
                                </ul>
                                <div style={{width:'100%', display: 'flex', justifyContent:'flex-end', paddingRight: '15px'}}>
                                    <IconCircle color="#21295C">
                                        <IonIcon icon={add} />
                                    </IconCircle>
                                </div>

                            </CardContent>
                        </Card>
    
                    </div>
                </div>

            </IonContent>
        </IonPage>
    )
}