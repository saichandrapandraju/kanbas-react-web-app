import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function PathParameters() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  
  return (
    <div>
      <h3>Path Parameters</h3>
      <input
        className="form-control mb-2"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
        type="number"
      />
      <input
        className="form-control mb-2"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))}
        type="number"
      />
      <a
        className="btn btn-primary me-2"
        href={`${REMOTE_SERVER}/lab5/calculator/add/${a}/${b}`}
      >
        Add {a} + {b}
      </a>
      <a
        className="btn btn-danger me-2"
        href={`${REMOTE_SERVER}/lab5/calculator/subtract/${a}/${b}`}
      >
        Subtract {a} - {b}
      </a>
      <a
        className="btn btn-success me-2"
        href={`${REMOTE_SERVER}/lab5/calculator/multiply/${a}/${b}`}
      >
        Multiply {a} * {b}
      </a>
      <a
        className="btn btn-warning"
        href={`${REMOTE_SERVER}/lab5/calculator/divide/${a}/${b}`}
      >
        Divide {a} / {b}
      </a>
    </div>
  );
}