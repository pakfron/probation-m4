import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useAppDispatch } from "./store/store";
import { useSelector } from "react-redux";
import {
  countSelector,
  getJSONPlaceHolder,
  increaseCount,
} from "./store/slices/placeHolderSlice";
import { usePlaceHolderContext } from "./hook/use-placeholder";

function App() {
  const dispatch = useAppDispatch();
  const { jsonDump = [], fetchPlaceHolder } = usePlaceHolderContext();
  console.log(jsonDump);
  const count = useSelector(countSelector);

  useEffect(() => {
    dispatch(getJSONPlaceHolder());
    fetchPlaceHolder();
  }, [dispatch, fetchPlaceHolder]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increaseCount())}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
