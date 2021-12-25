import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Details_1 from "./components/Details_1";

import Channels_dropdown from "./components/Drop_down/Channels/Channels_dropdown";
import Special from "./components/Drop_down/Channels/hotstar_special/Special";
import Language from "./components/Drop_down/lang/Language";
import Genres_dropdown from "./components/Drop_down/Genres/Genres_dropdown";
import Kid from "./components/Drop_down/Genres/Kid's/Kid";
import Comedy from "./components/Drop_down/Genres/Comedy/Comedy";

import Science from "./components/Drop_down/Genres/Science_friction/Science";
import Movies from "./components/Header_options/Movies";
import Original_drop from "./components/Header_options/Original_drop";
import Animals from "./components/Drop_down/Genres/Animals/Animals";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/channels">
            <Channels_dropdown />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          {/* header movies list  */}
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/original_drop">
            <Original_drop />
          </Route>
          <Route path="/special">
            <Special />
          </Route>
          <Route path="/science">
            <Science />
          </Route>
          <Route path="/language">
            <Language />
          </Route>
          <Route path="/genres">
            <Genres_dropdown />
          </Route>
          <Route path="/kid">
            <Kid />
          </Route>
          {/* animals */}
          <Route path="/animals">
            <Animals />
          </Route>
          <Route path="/comdey">
            <Comedy />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/detail_1/:id">
            <Details_1 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
