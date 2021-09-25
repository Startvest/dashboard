import { Dashboard } from './components/DashBoard'
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import '@ionic/react/css/core.css';
import { Menu } from './Menu';

function App() {
  return (
    <Dashboard />
  );
}

export default App;
