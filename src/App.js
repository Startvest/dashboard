<<<<<<< HEAD
import { Dashboard } from './components/DashBoard';
import { InvestorDashboard } from './components/Investors/Dashboard'
import { Route, Redirect } from 'react-router-dom';
import { IonReactHashRouter } from '@ionic/react-router'
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dashboard } from './components/DashBoard'
>>>>>>> 70fb085e7e640ca056f16a823b5107b671b03b7f
import './styles/card.css'

import '@ionic/react/css/core.css';

function App() {
  return (
    <IonReactHashRouter>
      <Route path="/">
          <Redirect to='/startup'></Redirect>
      </Route>
      <Route path="/startup" component={Dashboard}/>
      <Route path="/investor" component={InvestorDashboard}/>
    
    </IonReactHashRouter>
  );
}

export default App;
