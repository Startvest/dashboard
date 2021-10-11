import { IonButton, IonButtons, IonIcon, IonInput } from "@ionic/react";
import { useLocation } from "react-router";
import { Toolbar } from "./Toolbar";
import { attach, send, camera } from "ionicons/icons"

export function MessagePage(props){
    const location  = useLocation();
    const styleFooter = {
        position: "absolute",
        bottom: "0",
        width: "100%",
        height: "60px",
        backgroundColor: '#fff',
        borderTop: '0.5px solid #989898',
        display: 'flex',
        alignItems: 'center',
    }

    const styleInput = {
        background: '#a9a9a9',
        borderRadius: '50px',
        width: '48%', 
        height: '32px',
        border: '0',
        padding: '5px 15px 5px 15px'
    }

    const styleIcon = {
        color: '#878787',
        fontSize: '25px'
    }
    
    return(
        <div style={{width:'100%', height:'100%'}}>
            <Toolbar color="#fff">

            </Toolbar>
            
            <div style={styleFooter}>
                <span>
                    <IonButtons>
                        <IonIcon style={styleIcon} icon={attach}/>
                        <IonIcon style={styleIcon} icon={camera}/>
                    </IonButtons>
                </span>
                <input style={styleInput}></input>

                <span style={{marginLeft:'18px'}}>
                    <IonButtons>
                        <IonIcon style={styleIcon} icon={send}/>
                    </IonButtons>
                </span>
                
            </div>

           
        </div>
    )


}