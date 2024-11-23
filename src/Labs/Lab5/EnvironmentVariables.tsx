import React from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function EnvironmentVariables() {
  return (
    <div>
      <h3>Environment Variables</h3>
      <pre>
        REMOTE_SERVER={REMOTE_SERVER}
      </pre>
    </div>
  );
}