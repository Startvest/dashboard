import { IonSplitPane, IonApp, IonRouterOutlet, IonButtons, IonMenuButton } from '@ionic/react';
import { Menu } from './Menu';
import '../styles/Menu.css';
import { Route, Redirect } from 'react-router';
import { IonReactHashRouter } from '@ionic/react-router';
import { Overview } from '../pages/Overview';
import { Analytics } from '../pages/Analytics';
import { Investors } from '../pages/Investors'
import { Tools } from '../pages/Tools';
import { Messages } from '../pages/Messages';
import { Documents } from '../pages/Documents';
import { Account } from '../pages/Account';
import {Campaign} from '../pages/CreateCampaign';

export function Dashboard(){
    return(
        <IonApp>
            <IonReactHashRouter>
                <IonSplitPane contentId="main">
                    <Menu />
                    <IonRouterOutlet id="main">
                        <Route path="/" exact={true}>
                            <Redirect to="/overview" />
                        </Route>

                        <Route path="/overview" exact="true" component={Overview}></Route>
                        <Route path="/analytics" exact="true" component={Analytics}></Route>
                        <Route path="/investors" exact="true" component={Investors}></Route>
                        <Route path="/tools" exact="true" component={Tools}></Route>
                        {/* <Route path="/messages" exact="true" component={Messages}></Route> */}
                        <Route path="/campaign" exact="true" component={Campaign}></Route>
                        <Route path="/documents" exact="true" component={Documents}></Route>
                        <Route path="/my-account" exact="true" component={Account}></Route>
                    </IonRouterOutlet>


                    
                </IonSplitPane>
            </IonReactHashRouter>
        </IonApp>
    )
}
