import "./scss/main.scss";
import Routes from "./routes";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
