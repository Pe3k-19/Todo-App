import React, { useState, useEffect} from "react";
import "./style/App.css";
import MyTable from "./table"

function App() {

  //              HOOKS

  const [rows, setRows] = useState("");
  const [newData, setNewData] = useState('');


  useEffect(() => {
    handleLocalData()}, []);

const handleChangeForm = (event) => {
  setNewData(event.target.value);
}

//  ----------------------------------   POST    ----------------------------

const handleSubmitData = () => {
  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }
  
  postData('http://localhost:5000/',  {newData})
  .then(data => {console.log(data)
})

  .catch((error) => {
          console.error("Fetch error:",error);
        })
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
