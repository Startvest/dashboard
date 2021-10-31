import { Dashboard } from './components/DashBoard';
import { InvestorDashboard } from './components/Investors/Dashboard'
import { Route, Redirect } from 'react-router-dom';
import { IonReactHashRouter } from '@ionic/react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/card.css'
import './App.css';
import '@ionic/react/css/core.css';
import Login from './login/login';
function App() {
  return (
    <div>
    <Login/>
    </div>
  );
}

export default App;
