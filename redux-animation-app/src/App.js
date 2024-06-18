import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BarChart from './demo1/BarChart';
import Example from './demo2/index';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/demo1">Demo 1</Link></li>
            <li><Link to="/demo2">Demo 2</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/demo1" component={BarChart} />
          <Route path="/demo2" component={Example} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
