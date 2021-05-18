import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home'
import Marks from './Pages/Marks'
import Leaderboard from './Pages/Leaderboard'

function App() {
  const NoMatchRoute = () => <>
    <div className="page-404">
        <h1>404 Page</h1>
        <h4>Oops! Looks like you wandered somewhere unknown.</h4>
    </div>
    </>
  return (

    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/enter_marks' exact component={Marks}/>
        <Route path='/leaderboard' exact component={Leaderboard}/>
        <Route component={NoMatchRoute}/>
      </Switch>
    </Router>
  );
}

export default App;