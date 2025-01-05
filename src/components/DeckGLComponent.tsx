// import DeckGL, { LayersList, ScatterplotLayer, TextLayer } from "deck.gl";
// import { useEffect, useState } from "react";

// type Flight = {
//   callSign: string;
//   lon: number;
//   lat: number;
//   alt: number;
// };

// function DeckGLComponent() {
//   const [flights, setFlights] = useState<Flight[]>([]);

//   useEffect(() => {
//     const update = async () => {
//       const newFlights: Flight[] = await queryServer({ time: Date.now() });
//       setFlights(newFlights);
//       setTimeout(update, 60000);
//     };

//     update();
//   }, []);

//   const layers: LayersList = [
//     new ScatterplotLayer<Flight>({
//       id: "circles",
//       data: flights,
//       getPosition: (d: Flight) => [d.lon, d.lat, d.alt],
//       getFillColor: [255, 0, 0],
//       getRadius: 3,
//       radiusUnits: "pixels",
//     }),
//     new TextLayer<Flight>({
//       id: "labels",
//       data: flights,
//       getText: (d: Flight) => d.callSign,
//       getPosition: (d: Flight) => [d.lon, d.lat, d.alt],
//       getSize: 12,
//     }),
//   ];

//   return (
//     <DeckGL
//       initialViewState={{
//         longitude: -122.4,
//         latitude: 37.8,
//         zoom: 8,
//       }}
//       controller
//       layers={layers}
//     />
//   );
// }

// export default DeckGLComponent;
