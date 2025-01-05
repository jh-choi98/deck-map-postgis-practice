import React from "react";
import MapComponent from "./components/MapComponent";
import MapWithMarker from "./components/MapWithMarker";
import JotaiComponent from "./components/JotaiComponent";
// import DeckGLComponent from "./components/DeckGLComponent";

function App() {
  return (
    <div>
      <MapComponent />
      <MapWithMarker />
      {/* <DeckGLComponent /> */}
      <JotaiComponent />
    </div>
  );
}

export default App;
