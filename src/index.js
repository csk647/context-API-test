import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserPrvider } from "./context/UserContext";

ReactDOM.render(
  <UserPrvider>
    <App />
  </UserPrvider>,
  document.getElementById("root")
);
