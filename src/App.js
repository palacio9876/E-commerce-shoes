import React from "react";
import { Header } from "./components/Header/Header";
import { Productos } from "./components/Products/Productos";
import 'boxicons';


function App() {
  return (
    <div className="App">
      <Header />
      <Productos />
    </div>
  );
}

export default App;
