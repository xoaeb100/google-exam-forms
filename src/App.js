import "./App.css";
import Header from "./components/Header";
import Mainbody from "./components/Mainbody";
import Templates from "./components/Templates";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Formheader from "./components/Formheader";
import CenteredTabs from "./components/Tabs";
import Question_form from "./components/Question_form";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/form">
            <Formheader />
            <CenteredTabs />
            <Question_form />
          </Route>
          <Route path="/">
            <Header />
            <Templates />
            <Mainbody />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
