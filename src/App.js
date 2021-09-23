import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GlobalContextProvider from './context/GlobalState';

function App() {
  
  return (
    <GlobalContextProvider>
      <Router>
        <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/cart' component={Cart}/>
            </Switch>
        </div>
      </Router>
    </GlobalContextProvider>

  );
  
}

export default App;
