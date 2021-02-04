import './App.css';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          
        </Switch>
     </Router>
  );
}

export default App;
