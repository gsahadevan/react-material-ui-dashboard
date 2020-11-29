import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import BasicBar from './views/Maps/basicbar';
import HeatMap from './views/Maps/heatmap';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/basicbar' component={BasicBar} />
          <Route path='/heatmaps' component={HeatMap} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
