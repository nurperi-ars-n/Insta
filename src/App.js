import { Route, Switch } from 'react-router'
import {LogIn} from "./components/Pages/LogIn";
import {Home} from "./components/Pages/Home"
import './App.css'
import {SignUp} from "./components/Pages/SignUp";
function App() {
  return (
    <div className="container">
      <Switch>
        <Route path='/login' component={LogIn} />
          <Route path='/signup' component={SignUp} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
