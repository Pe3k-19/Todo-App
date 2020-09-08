import React, { useState, useEffect} from "react";
import "./style/App.css";
import MyTable from "./table"

function App() {

  //              HOOKS

  const [rows, setRows] = useState("");
  const [newData, setNewData] = useState("");


  useEffect(() => {
    handleLocalData()}, []);
    

  //   ---------------------------   PUT    --------------------------
// console.log("original", typeof newData)
// // newData.toString();
// // console.log("tostring", typeof newData)
// // JSON.stringify(newData)
// // console.log("stringify", typeof newData)
// JSON.parse(newData)
// console.log("parse", typeof newData)

const handleChangeForm = (event) => {
  setNewData(event.target.value);
}

const handleSubmitData = () => {
  let request = {
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      "mods": 'cors'
    },
    method: 'POST',
  }

  fetch("http://localhost:5000/", request,
{body: newData})
.then(res => {
  if(res.ok) {return res.json()}
  else {console.log("Res error")}
})
.then(json => {console.log("json: ", json)})
.then(data => {console.log("Success:", data);
})
.catch((error) => {
  console.error("Fetch error:",error);
})
// fetch('http://localhost:5000', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.parse(rows),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Fetch Error:', error);
// });
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
  // console.log(rows)
}

  return (
    <div className="enviroment">
      <div className="container">
        <header>
          <h1>Todo App</h1>
        </header>
        <div>
          <MyTable tableData={rows}
          newData={newData}
          onChangeForm = {handleChangeForm}
          onChangeLocalData = {handleLocalData}
          onSubmitData = {handleSubmitData} />
        </div>
        {/* {console.log(typeof newData)} */}
      </div>
    </div>
  );
}

export default App;
