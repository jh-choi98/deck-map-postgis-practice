import maplibregl, { Map, Marker } from "maplibre-gl";
import { useEffect, useRef } from "react";

import "maplibre-gl/dist/maplibre-gl.css"; // Important

const MAPTILER_KEY = process.env.REACT_APP_MAPTILER_KEY;

const MapWithMarker = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);
  const marker = useRef<Marker | null>(null);

  useEffect(() => {
    if (map.current && marker.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current as HTMLElement,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${MAPTILER_KEY}`,
      center: [12.550343, 55.665957],
      zoom: 8,
    });

    marker.current = new maplibregl.Marker()
      .setLngLat([12.550343, 55.665957])
      .addTo(map.current);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }

      if (marker.current) {
        marker.current = null;
      }
    };
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "300px" }} />;
};

export default MapWithMarker;
