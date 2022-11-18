// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';
import { useState } from 'react';

function App() {
  // useState hook
  const [alert, setAlert] = useState(null);

  // Function
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
          <Switch>

            <Route exact path="/">
              <Home showAlert={showAlert} />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/Login">
              <Login showAlert={showAlert} />
            </Route>

            <Route path="/signup">
              <Signup showAlert={showAlert} />
            </Route>

          </Switch>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
