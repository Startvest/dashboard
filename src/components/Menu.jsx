import { Img } from "./Img"
import { IonMenu, IonContent, IonList, IonItem, IonIcon, IonMenuToggle } from "@ionic/react";
import { appsSharp, analyticsSharp, people, hammer, chatbox, documentText, person, addCircleOutline } from "ionicons/icons"
import { useLocation } from 'react-router-dom';
import '@ionic/react/css/core.css';
import '../styles/Menu.css';
import '../styles/fonts.css';
import Image from '../assets/logo-white.png';


export function Menu(){
    const urlRoute = useLocation();
    const selections = [
        {name:'Overview', icon: appsSharp, url:'/overview'},
        {name:'Analytics', icon: analyticsSharp, url:'/analytics'},
        {name:'Investors', icon: people, url:'/investors'},
        {name:'Tools', icon: hammer, url:'/tools'},
        // {name:'Messages', icon: chatbox, url:'/messages'},
        {name: 'Raise Funds', icon: addCircleOutline, url:'/campaign'},
        {name:'Documents', icon: documentText, url:'/documents'},
        {name:'Account', icon: person, url:'/my-account'}
    ]
    return(
        <IonMenu side="start" type="overlay" menuId="dashboard" contentId="main" className="menu">
            <IonContent> 
                <Img src={Image} />
                <IonList>
                    {selections.map((element,index)=> {
                        return(
                            <IonMenuToggle key={index} autoHide="false">
                                <IonItem lines="none" routerDirection="right" routerLink={element.url} className={urlRoute.pathname===element.url? 'active':'not-active'}> 
                                    <IonIcon color={urlRoute.pathname===element.url?'#21295C':'#f5f5f5'} icon={element.icon} slot="start" />
                                    <h3 className="label">{element.name}</h3>
                                </IonItem>
                            </IonMenuToggle>
                        )
                    } )}
                </IonList>
            </IonContent> 
        </IonMenu>


            
        
    )
}