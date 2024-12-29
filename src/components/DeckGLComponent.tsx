import DeckGL, { LineLayer, MapViewState } from "deck.gl";

const INITIAL_VIEW_STATE: MapViewState = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
};

type DataType = {
  from: [longitude: number, latitude: number];
  to: [longitude: number, latitude: number];
};

function DeckGLComponent() {
  const layers = [
    new LineLayer<DataType>({
      id: "line-layer",
      data: "/path/to/data.json",
      getSourcePosition: (d: DataType) => d.from,
      getTargetPosition: (d: DataType) => d.to,
    }),
  ];
  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} controller layers={layers} />
  );
}

export default DeckGLComponent;
