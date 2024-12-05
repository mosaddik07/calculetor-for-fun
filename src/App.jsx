import { useEffect, useState } from "react";
import "./assets/CSS/main.css";
import ButtonCom from "./component/shared/Button/ButtonCom";

function App() {
  const [state, setState] = useState("");

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleFocus = (e) => {
    e.target.scrollLeft = e.target.scrollWidth;
  };

  const equal = () => {
    setState(eval(state));
  };

  return (
    <div className="main">
      <div className="body">
        <input onChange={handleChange} onFocus={handleFocus} className="input" value={state} />

        <div className="Buttons">
          <ButtonCom text={"1"} onclick={(e) => setState(state + e.target.innerText)} />
          <ButtonCom text={"2"} onclick={(e) => setState(state + e.target.innerText)} />
          <ButtonCom text={"3"} onclick={(e) => setState(state + e.target.innerText)} />
          <ButtonCom text={"4"} onclick={(e) => setState(state + e.target.innerText)} />
          <ButtonCom text={"5"} onclick={(e) => setState(state + e.target.innerText)} />
          <ButtonCom text={"+"} onclick={(e) => setState(state + e.target.innerText)} />
          <ButtonCom text={"6"} onclick={(e) => setState(state + e.target.innerText)} />
          <ButtonCom text={"7"} onclick={(e) => setState(state + e.target.innerText)} />
          <ButtonCom text={"-"} onclick={(e) => setState(state + e.target.innerText)} />
          <ButtonCom text={"8"} onclick={(e) => setState(state + e.target.innerText)} />
          <ButtonCom text={"9"} onclick={(e) => setState(state + e.target.innerText)} />
          <ButtonCom text={"*"} onclick={(e) => setState(state + e.target.innerText)} />
          <ButtonCom text={"0"} onclick={(e) => setState(state + e.target.innerText)} />
          <ButtonCom text={"00"} onclick={(e) => setState(state + e.target.innerText)} />
          <ButtonCom text={"="} onclick={(e) => equal()} />
          <ButtonCom text={"."} onclick={(e) => setState(state + e.target.innerText)} />
          <button className="bigBtn" onClick={() => setState(state.slice(0, -1))}>
            D
          </button>
          <button className="bigBtn" onClick={() => setState("")}>
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
