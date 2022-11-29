import "./App.css";
import React, { useState, useEffect } from "react";
export default function App() {
  const [ust, setUst] = useState("");
  const [ist, setIst] = useState("");
  const parseISOString = (s) => {
    var b = s.split(/\D+/);
    return new Date(
      Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6])
    ).toString();
  };

  useEffect(() => {
    if (ust) {
      try {
        let ist = parseISOString(ust);

        setIst(ist);
      } catch (err) {
        console.log(err);
        setIst("Please enter valid time!");
      }
    }
  }, [ust]);

  return (
    <div className="App">
      <label>Enter UTC Time : </label>
      <input type="text" value={ust} onChange={(e) => setUst(e.target.value)} />
      <br />
      <h3>{ist}</h3>
    </div>
  );
}
