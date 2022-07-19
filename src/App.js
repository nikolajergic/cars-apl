import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppCars from './pages/AppCars';
import AddCar from './pages/AddCar';


function App() {
  return (
    <div className="App">
       <Router>
        <nav>
          <ul>
            <li>
              <Link to='/cars'>Cars</Link>
            </li>
            <li>
              <Link to='/add'>Add Car</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/cars'>
            <AppCars />
          </Route>
          <Route exact path='/add'>
            <AddCar />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
