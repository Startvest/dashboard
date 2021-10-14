import { IonSplitPane, IonApp, IonRouterOutlet, IonButtons, IonMenuButton } from '@ionic/react';
import { InvestorsMenu } from './Menu';
import '../../styles/Menu.css';
import { Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom'
import { IonReactHashRouter } from '@ionic/react-router';
import { InvestorOverview } from '../../pages/InvestorsView/Overview';
import { InvestorAnalytics } from '../../pages/InvestorsView/Analytics';
import { Invest } from '../../pages/InvestorsView/Invest';
import { InvestorTools } from '../../pages/InvestorsView/Tools';
import { InvestorAccount } from '../../pages/InvestorsView/Account'


export function InvestorDashboard(){
    return(
        <IonApp>
            <IonReactHashRouter basename="/investor">
                <IonSplitPane contentId="investor-main">
                    <InvestorsMenu />
                    <IonRouterOutlet id="investor-main">
                        <Route path="/" exact={true}>
                            <Redirect to="/overview" />
                        </Route>

                        <Link path="/overview" exact="true" component={InvestorOverview}></Link>
                        <Link path="/analytics" exact="true" component={InvestorAnalytics}></Link>
                        <Link path="/tools" exact="true" component={InvestorTools}></Link>
                        <Link path="/invest" exact="true" component={Invest}></Link>
                        <Link path="/my-account" exact="true" component={InvestorAccount}></Link>
                    </IonRouterOutlet>


                    
                </IonSplitPane>
            </IonReactHashRouter>
        </IonApp>
    )
}
