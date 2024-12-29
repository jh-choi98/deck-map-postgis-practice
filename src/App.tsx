import React from "react";
import MapComponent from "./components/MapComponent";
import MapWithMarker from "./components/MapWithMarker";
import DeckGLComponent from "./components/DeckGLComponent";

function App() {
  return (
    <div>
      <MapComponent />
      <MapWithMarker />
      <DeckGLComponent />
    </div>
  );
}

export default App;
