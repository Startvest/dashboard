import { Img } from "../Img"
import { IonMenu, IonContent, IonList, IonItem, IonIcon, IonMenuToggle } from "@ionic/react";
import { appsSharp, analyticsSharp, hammer, person } from "ionicons/icons"
import { useLocation } from 'react-router-dom';
import '@ionic/react/css/core.css';
import '../../styles/Menu.css';
import '../../styles/fonts.css';
import Image from '../../assets/logo-white.png';


export function InvestorsMenu(){
    const urlRoute = useLocation();
    const selections = [
        {name:'Overview', icon: appsSharp, url:'/overview'},
        {name:'Analytics', icon: analyticsSharp, url:'/analytics'},
        {name:'Tools', icon: hammer, url:'/tools'},
        {name:'Account', icon: person, url:'/my-account'}
    ]
    return(
        <IonMenu side="start" type="overlay" menuId="investor-dashboard" contentId="investor-main" className="menu">
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