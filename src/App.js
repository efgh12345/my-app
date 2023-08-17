import { Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/landingPage">
        {<LandingPage />}
        {/* {!isAuthenticated && <Redirect to="/" />} */}
      </Route>

    </Switch>
  );
}

export default App;