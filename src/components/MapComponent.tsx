import { useEffect, useRef } from "react";
import maplibregl, { Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const MapComponent = () => {
  // Create a ref for the map container div
  const mapContainer = useRef<HTMLDivElement | null>(null);

  // Create a ref to store the MapLibre map instance
  const map = useRef<Map | null>(null);

  // useEffect is used to initialize the map when the component mounts
  useEffect(() => {
    // Check if the map is already initialized
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current as HTMLElement, // The DOM element where the map will be rendered
      style: "https://demotiles.maplibre.org/style.json",
      center: [0, 0], // Initial map center [longitude, latitude]
      zoom: 2, // Initial zoom level
    });
    // Cleanup function to remove the map when the component unmounts
    return () => {
      if (map.current) {
        map.current.remove(); // Destroys the map instance to free up resources
      }
    };
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  return (
    <div
      // The div's ref is passed to MapLibre during initialization
      ref={mapContainer} // Attach the ref to this div
      style={{ width: "100%", height: "300px" }}
    />
  );
};

export default MapComponent;

/*
In React, variables declared inside the component function are reinitialized every
time the component re-renders. This happens because:
- React component lifecycle:
    - In React, a functional component is essentially a function that gets called again every
    time it re-renders
    - This means any variables decalred inside the function are recreated as if you're calling
    the function from scratch
    - This may lead to performance issues or errors
- However, changes in variables will not trigger a re-render unless tied to React's state or props

Why use useRef?
- useRef is a React Hook that provides a way to persist a mutable value across component renders
without causing a re-render
- It returns a mutable object (ref) with a .current property, which can hold any value. Unlike state,
updating a ref does not trigger a re-render of the component
- Benefits
    - Ref values persist across renders without being reset
    - Does not trigger re-renders. This makes it suitable for storing
    values that need to be mutable but do not need to trigger UI updates

Would this work?
let map;
useEffect(()=>{
    map = new maplibregl.Map({...});
}, []);
=> No, in most cases. map is a regular JS variable outside the useEffect scope but still within
the component scope. During each re-render, React re-executes the function and resets the value
of map to its default undefined state. However, since the useEffect does not run agin, map remains
undefined

** DO NOT write and read ref.current during rendering. This is becuase React expects that the body
of your component behaves like a pure function (if the inputs are the same, it should return exactly
the same JSX) => You can read or write refs from event handlers or effects instead

If you have to read or write sth during rendering, use state instead
*/

/*
Cleanup function in useEffect
: a way to handle side effects that need to be cleaned up when the component is unmounted or
when the effect is re-executed. It's primarily used to avoid memory leaks or lingering effects
that could cause unwanted behaviour
- If you return a function inside useEffect, that function acts as the cleaup function

- Prevents memory leaks
- Avoid side effects: leftover subscriptions or listeners might continue to run, causing bugs 
or unnecessary computations
*/

/*
mount: DOM 객체가 생성되고 브라우저에 나타나는 것
unmount: 그 반대
*/
