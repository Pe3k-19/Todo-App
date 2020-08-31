import React from "react";
import { Table } from "antd";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function handleDelete() {
  return console.log("delete");
}
function handleGet() {
  return console.log("Get");
}
function handlePost() {
  return console.log("post");
}
function handlePut() {
  return console.log("put");
}

const columns = [
  {
    title: "Task Title",
    dataIndex: "title",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a href="/" onClick={() => handleDelete()}>Delete</a>,
  },
];
let fakeData = [
  {
    key: "1",
    title: "Umyť auto",
  },
  {
    key: "2",
    title: "Uvariť čaj",
  },
  {
    key: "3",
    title: "Kúpiť chlieb",
  },
  {
    key: "4",
    title: "Upiecť koláč",
  },
];
let local = '';

export default function MyTable() {
  
  const localData = () => {
    let request = {
      headers: {
        'Content-Type': 'application/json'
        // Authorization: 'Bearer ' + GlobalStore.token //Zatial do storu token...
      },
      // body: JSON.stringify(data),
      credentials: 'include',
      method: 'GET',
      mode: 'no-cors',
      // body: JSON.stringify(req)
    }
  
    fetch('http://localhost:5000/data', request)
    .then(data => {
      console.log("succes", data);
    })
    .then(res => {
      return res.json()
    })
  
    .catch(err => {
      console.log('err: ', err)
    })
  }
  

  return (
    <div>
      <Table columns={columns} dataSource={fakeData} className="table" />
      <div className="navigation">
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          size="normal"
          onClick={() => handleGet()}
        >
          {localData()}
          {console.log(local)}

          Get Task
        </Button>
        <Button type="primary" onClick={() => handlePost()}>
          Post Task
        </Button>
        <Button onClick={() => handlePut()}>Put Task</Button>
      </div>
    </div>
  );
}
