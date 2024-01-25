import "./App.css";
import { useState } from "react";
import Weather from "./weather.js";

function App() {
  const [location, setLocation] = useState("Detroit");
  const [text, setText] = useState("");
  const [units, setUnits] = useState("metric");
  return (
    <div className="App">
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLocation(text);
            console.log(location);
          }}
        >
          <input
            type="text"
            placeholder="Enter your city"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <select
            name="Units"
            onChange={(e) => {
              setUnits(e.target.value);
            }}
          >
            <option value={"metric"}>Metric</option>
            <option value={"imperial"}>Imperial</option>
            <option value={"standard"}>Kelvin</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Weather city={location} units={units} />
    </div>
  );
}

export default App;
