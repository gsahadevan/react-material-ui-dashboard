import './App.css';
import Header from './Header';
import Dashboard from './views/Dashboard';
import Maps from './views/Maps';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/maps' component={Maps} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
