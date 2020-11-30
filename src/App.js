import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Dashboard from './views/Dashboard';
import BasicBar from './views/Maps/basicbar';
import HeatMap from './views/Maps/heatmap';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/basicbar' component={BasicBar} />
          <Route path='/heatmaps' component={HeatMap} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;