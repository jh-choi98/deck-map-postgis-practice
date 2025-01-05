import { atom, useAtom } from "jotai";

type Point = {
  x: number;
  y: number;
};

const dotsAtom = atom<Point[]>([]);
const drawingAtom = atom(false);

const handleMouseDownAtom = atom(null, (get, set) => set(drawingAtom, true));

const handleMouseUpAtom = atom(null, (_, set) => {
  set(drawingAtom, false);
});

const handleMouseMoveAtom = atom(null, (get, set, update: Point) => {
  if (get(drawingAtom)) {
    set(dotsAtom, (prev) => [...prev, update]);
  }
});

const SvgDots = () => {
  const [dots] = useAtom(dotsAtom);
  return (
    <g>
      {dots.map(({ x, y }, index) => (
        <circle cx={x} cy={y} r="2" fill="#aaa" key={index} />
      ))}
    </g>
  );
};

const SvgRoot = () => {
  const [, handleMouseUp] = useAtom(handleMouseUpAtom);
  const [, handleMouseDown] = useAtom(handleMouseDownAtom);
  const [, handleMouseMove] = useAtom(handleMouseMoveAtom);
  return (
    <svg
      width="100vw"
      height="100vh"
      viewBox="0 0 100vw 100vh"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={(e) => {
        handleMouseMove({ x: e.clientX, y: e.clientY });
      }}>
      <rect width="100vw" height="100vh" fill="#eee" />
      <SvgDots />
    </svg>
  );
};

export default function JotaiComponent() {
  return (
    <div>
      <SvgRoot />
    </div>
  );
}
