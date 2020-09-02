import React, { useState, useEffect} from "react";
import "./style/App.css";
import MyTable from "./table"

function App() {

  //              HOOKS

  const [rows, setRows] = useState("");

let tableData = [];

  const handleLocalData = () => {
    let request = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET',
    }
  
    fetch('http://localhost:5000/data', request)
    .then(res => res.json())
    .then(data => setRows(data))
  
    .catch(err => {
      console.log('error: ', err)
    })
  }

useEffect(() => {
  handleLocalData();
}, []);
  




  return (
    <div className="enviroment">
      <div className="container">
        <header>
          <h1>Todo App</h1>
        </header>
        <div>
          <MyTable tableData={rows}
          onChangeLocalData = {handleLocalData}/>
          {/* <table>
            <thead>
            <tr>
              <th>Task name</th>
              <th>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{rows}</th>
              </tr>
              </tbody>
          </table>
          <button onClick= {() => localData()}>Get task</button> */}
          {/* {console.log(rows)} */}
        </div>
      </div>
    </div>
  );
}

export default App;
