import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Dashboard from './views/Dashboard';
import HeatMap from './views/Maps/heatmap';
import Maps from './views/Maps';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/heatmaps' component={HeatMap} />
          <Route path='/maps' component={Maps} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
