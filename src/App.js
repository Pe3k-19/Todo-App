import React from "react";
import "./style/App.css";
import MyTable from "./table"

function App() {
  // const aaa = () => {
    
  

    // fetch('http://localhost:5000/tasks', {
      // method: 'GET', // *GET, POST, PUT, DELETE, etc.
      // mode: 'no-cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // headers: {
        // 'Content-Type': "application/json" //'text/plain'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      // },
    // })
    // .then(response => response.json())
    // .then(data => console.log(data)).catch((err) => console.log("err:", err))
// }

  return (
    <div className="enviroment">
      <div className="container">
        <header>
          <h1>Todo App</h1>
  {/* <p>{aaa()}</p> */}
        </header>
        <div>
          <MyTable />
        </div>
      </div>
    </div>
  );
}

export default App;
