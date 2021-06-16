import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./pages/homePage";
import NotePage from "./pages/notePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" children={<HomePage />} />
          <Route path="/:id" children={<NotePage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
