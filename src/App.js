import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import ApexCharts from './views/apexcharts';
import BasicBar from './views/apexcharts/basicbar';
import HeatMap from './views/apexcharts/heatmap';
import Bubble from './views/apexcharts/bubble';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/apexcharts' component={ApexCharts} />
          <Route path='/basicbar' component={BasicBar} />
          <Route path='/heatmaps' component={HeatMap} />
          <Route path='/bubble' component={Bubble} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
