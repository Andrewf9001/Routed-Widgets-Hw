import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import icons from "./helpers/icons";
import Navbar from "./navigation/Navbar";
import Home from "./pages/Home";
import PhotoTransformer from "./pages/PhotoTransformer";
import ImageGallery from "./pages/ImageGallery";
import Capitalize from "./pages/Capitalize";
import TruncateWords from "./pages/TruncateWords";
import RandomHex from "./pages/RandomHex";
import RockPaperScissors from "./pages/RockPaperScissors";
import BoxShadow from "./pages/box-shadow-widget/BoxShadow";

function App() {
  icons();

  return (
    <div className="App">
      <Router>
        <Route path="/" component={Navbar} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/photo-transformer" component={PhotoTransformer} />
          <Route path="/image-gallery" component={ImageGallery} />
          <Route path="/capitalize" component={Capitalize} />
          <Route path="/truncate-words" component={TruncateWords} />
          <Route path="/random-hex" component={RandomHex} />
          <Route path="/rock-paper-scissors" component={RockPaperScissors} />
          <Route path="/box-shadow" component={BoxShadow} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
