import './App.css';
import Header from './Header';
import Nav from './Nav';
import Career from './Career';
import About from './About';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/career' component={Career} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <div>Home page </div>;
};

export default App;
