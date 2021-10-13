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
<<<<<<< HEAD
import { Account } from '../pages/Account'
import { Link } from 'react-router-dom';
=======
import { Account } from '../pages/Account';
import {Campaign} from '../pages/CreateCampaign';
>>>>>>> 70fb085e7e640ca056f16a823b5107b671b03b7f

export function Dashboard(){
    return(
        <IonApp>
            <IonReactHashRouter basename="/startup">
                <IonSplitPane contentId="main">
                    <Menu />
                    <IonRouterOutlet id="main">
                        <Route path="/" exact={true}>
                            <Redirect to="/overview" />
                        </Route>

<<<<<<< HEAD
                        <Link path="/overview" exact="true" component={Overview}></Link>
                        <Link path="/analytics" exact="true" component={Analytics}></Link>
                        <Link path="/investors" exact="true" component={Investors}></Link>
                        <Link path="/tools" exact="true" component={Tools}></Link>
                        <Link path="/messages" exact="true" component={Messages}></Link>
                        <Link path="/documents" exact="true" component={Documents}></Link>
                        <Link path="/my-account" exact="true" component={Account}></Link>
=======
                        <Route path="/overview" exact="true" component={Overview}></Route>
                        <Route path="/analytics" exact="true" component={Analytics}></Route>
                        <Route path="/investors" exact="true" component={Investors}></Route>
                        <Route path="/tools" exact="true" component={Tools}></Route>
                        {/* <Route path="/messages" exact="true" component={Messages}></Route> */}
                        <Route path="/campaign" exact="true" component={Campaign}></Route>
                        <Route path="/documents" exact="true" component={Documents}></Route>
                        <Route path="/my-account" exact="true" component={Account}></Route>
>>>>>>> 70fb085e7e640ca056f16a823b5107b671b03b7f
                    </IonRouterOutlet>


                    
                </IonSplitPane>
            </IonReactHashRouter>
        </IonApp>
    )
}
