import React, { useContext } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Router } from "./components/Router";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="App">
      {isLoggedIn && <Navbar />}
      <Router />
    </div>
  );
}

export default App;
