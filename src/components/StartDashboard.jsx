import { IonSplitPane, IonApp, IonRouterOutlet, IonButtons, IonMenuButton } from '@ionic/react';
import { Menu } from './StartMenu';
import '../styles/Menu.css';
import { Redirect } from 'react-router';
import { IonReactHashRouter } from '@ionic/react-router';
import { Overview } from '../pages/StartupView/Overview';
import { Analytics } from '../pages/StartupView/Analytics';
import { Investors } from '../pages/StartupView/Investors'
import { Tools } from '../pages/StartupView/Tools';
import { Messages } from '../pages/StartupView/Messages';
import { Documents } from '../pages/StartupView/Documents';
import { Account } from '../pages/StartupView/Account'
import { Link } from 'react-router-dom';
import {Campaign} from '../pages/StartupView/CreateCampaign';
import { Settings } from '../pages/StartupView/Settings';

export function Dashboard(){
    return(
        <IonApp>
            <IonReactHashRouter basename="/startup">
                <IonSplitPane contentId="main">
                    <Menu />
                    <IonRouterOutlet id="main">
                        <Link path="/" exact={true}>
                            <Redirect to="/overview" />
                        </Link>

                        <Link path="/overview" exact="true" component={Overview}></Link>
                        <Link path="/analytics" exact="true" component={Analytics}></Link>
                        <Link path="/investors" exact="true" component={Investors}></Link>
                        <Link path="/tools" exact="true" component={Tools}></Link>
                        {/*<Link path="/messages" exact="true" component={Messages}></Link>*/}
                        <Link path="/documents" exact="true" component={Documents}></Link>
                        <Link path="/my-account" exact="true" component={Account}></Link>
                        <Link path="/campaign" exact="true" component={Campaign}></Link>
                        <Link path="/settings" exact="true" component={Settings}></Link>
                        
                    </IonRouterOutlet>


                    
                </IonSplitPane>
            </IonReactHashRouter>
        </IonApp>
    )
}
