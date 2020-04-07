import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import { Provider } from "react-redux";

import Store from "./Store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={Store}>
          <Video />
          <Sidebar />
        </Provider>
      </div>
    );
  }
}

export default App;
