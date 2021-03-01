import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import requests from "./requests";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Navation Bars */}
      <Nav setSelectedOption={setSelectedOption} />

      {/* Results */}

      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
