import React, { useState, useEffect} from "react";
import "./style/App.css";
import MyTable from "./table"

function App() {

  //              HOOKS

  const [rows, setRows] = useState("");
  const [newData, setNewData] = useState('nove data');


  useEffect(() => {
    handleLocalData()}, []);
    

  //   ---------------------------   PUT    --------------------------



const handleSubmitData = () => {
//   let request = {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     method: 'POST',
//   }

//   fetch("https://localhost:5000", request,
// {body: JSON.stringify(data)})
// .then(res => res.json())
// .then(data => {console.log("Success:", data);
// })
// .catch((error) => {
//   console.error("Fetch error:",error);
// })
fetch('http://localhost:5000', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.parse(newData),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}

//   ---------------------------   GET    --------------------------


const handleLocalData = () => {
  let request = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
  }

  // const tableData = 
  fetch('http://localhost:5000/data', request)
  .then(res => res.json())
  .then(data => setRows(data))

  .catch(err => {
    console.log('error: ', err)
  });
}

  return (
    <div className="enviroment">
      <div className="container">
        <header>
          <h1>Todo App</h1>
        </header>
        <div>
          <MyTable tableData={rows}
          onChangeLocalData = {handleLocalData}
          onSubmitData = {handleSubmitData} />
          <button onClick={handleLocalData}>dsfsdf</button>
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
