import { useState } from "react";

import Header from "./Components/Header";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import About from "./pages/About";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="app">

      <Header
        activePage={activePage}
        onNavigate={setActivePage}
      />

      {activePage === "home" && <Home />}

      {activePage === "forecast" && <Forecast />}

      {activePage === "about" && <About />}

    </div>
  );
}

export default App;