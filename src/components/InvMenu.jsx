import { Img } from "./Img"
import { IonMenu, IonContent, IonList, IonItem, IonIcon, IonMenuToggle, IonButtons, IonItemDivider, IonLabel } from "@ionic/react";
import { appsSharp, analyticsSharp, construct, person, cash } from "ionicons/icons"
import { useLocation } from 'react-router-dom';
import '@ionic/react/css/core.css';
import '../styles/Menu.css';
import '../styles/fonts.css';
import Image from '../assets/logo-white.png';
import { useState } from "react";
import { Link } from 'react-router-dom'


export function InvestorsMenu(){
    const pro = () =>{
        return(
            <span className="pro-icon">Pro</span>
        )
    }

    const urlRoute = useLocation();
    const selections = [
        {name:'Overview', icon: appsSharp, url:'/overview'},
        {name:'Analytics', icon: analyticsSharp, url:'/analytics'},
        {name:'Invest', icon: cash, url:'/invest'},
        {name:'Tools', icon: construct, url:'/tools', add:pro()},
        {name:'Account', icon: person, url:'/my-account'},
    ]

   
    return(
        <IonMenu side="start" type="overlay" menuId="investor-dashboard" contentId="investor-main" id="menu" className="menu">
            <IonContent> 
                <Link to={"/overview"}><Img src={Image} alt="StartVest Logo"/></Link>
                <IonList>
                    {selections.map((element,index)=> {
                        return(
                            <IonMenuToggle key={index} autoHide="false">
                                <IonItem lines="none" routerDirection="right" routerLink={element.url} className={urlRoute.pathname===element.url? 'active':'not-active'}> 
                                    <IonIcon color={urlRoute.pathname===element.url?'#21295C':'#f5f5f5'} icon={element.icon} slot="start" />
                                    <h3 className="label">{element.name} {element.add}</h3>
                                </IonItem>
                            </IonMenuToggle>
                        )
                    } )}
                     <IonItem><div className='divider'></div></IonItem>
                </IonList>
            </IonContent> 
        </IonMenu>


            
        
    )
}