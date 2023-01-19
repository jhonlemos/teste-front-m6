import Calculate from "./page/calculate";
import { Switch, Route } from "react-router-dom";
import Error from "./page/error";

function App() {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Calculate />
      </Route>

      <Route path={"/error"}>
        <Error />
      </Route>
    </Switch>
  );
}

export default App;
