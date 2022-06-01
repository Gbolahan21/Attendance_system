import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lecturer from './Lecturer';
import Home from './Home';
import Login from './Login';
import Student from './student';
import Forget from './forget';
import Newpassword from './newpassword';
import Dashboard from './dashboard';
import './styles.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Lecturer" component={Lecturer} />
                    <Route path="/Login" component={Login} />
                    <Route path="/student" component={Student} />
                    <Route path="/forget" component={Forget} />
                    <Route path="/newpassword" component={Newpassword} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </div>
        </Router>
      
    );
}


export default App;