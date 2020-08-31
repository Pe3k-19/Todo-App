import React from "react";
import "./style/App.css";

//   components
import MyTable from "./components/table";

function App() {
  return (
    <div className="enviroment">
      <div className="container">
        <header>
          <h1>Todo App</h1>
        </header>
        <div>
          <MyTable />
        </div>
      </div>
    </div>
  );
}

export default App;
