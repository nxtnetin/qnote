import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import NotePage from "./pages/notePage";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" children={<HomePage />} />
          <Route path="/note/:id" children={<NotePage />} />
          <Route exact path="/login" children={<LoginPage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
