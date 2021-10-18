import logo from './logo.svg';
import './App.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Specialists from './Pages/Specialists/Specialists';
import VisitUs from './Pages/VisitUs/VisitUs';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Details from './Pages/Details/Details';

function App() {
  return (
    <div className="App">
     
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/details/:serviceId">
            <Details></Details>
          </Route>
          <Route path="/specialists">
            <Specialists></Specialists>
          </Route>
          <Route path="/visitus">
            <VisitUs></VisitUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
