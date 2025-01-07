import { useAtom } from "jotai";
import { loadableAtom } from "../atoms/asyncAtom";

function JotaiComponent() {
  const [atomData] = useAtom(loadableAtom);

  if (atomData.state === "loading") return <div>Loading...</div>;
  if (atomData.state === "hasError") {
    const error = atomData.error as Error;
    return <div>Error: {error.message}</div>;
  }
  if (atomData.state === "hasData") return <div>{atomData.data.title}</div>;

  return null;
}

export default JotaiComponent;
