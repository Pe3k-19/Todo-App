import React from "react";
import { Table } from "antd";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Form, Input } from "antd";
// import { PresetColorTypes } from "antd/lib/_util/colors";

function handleDelete() {
  return console.log("delete");
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
    render: () => (
      <a href="/" onClick={() => handleDelete()}>
        Delete
      </a>
    ),
  },
];
// let fakeData = [
//   {
//     key: "1",
//     title: "Vyčistit topánky",
//   },
//   {
//     key: "2",
//     title: "Uvariť čaj",
//   },
//   {
//     key: "3",
//     title: "Kúpiť chlieb",
//   },
//   {
//     key: "4",
//     title: "Upiecť koláč",
//   },
// ];

export default function MyTable(props) {
  function handlePost() {
    return console.log("post");
  }

  return (
    <div>
      <Table columns={columns} dataSource={props.tableData} className="table" />
      <div className="navigation">
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          size="normal"
          onClick={() => props.onChangeLocalData()}
        >
          Get Task
        </Button>
        {/* <Button type="primary" onClick={() => handlePost()}>
          Post Task
        </Button> */}
        <Button id="putBtn" onClick={() => props.onSubmitData()}>
          Put Task
        </Button>

        <Form
          action="https://www.foo.com"
          method="POST"
          name="basic"
          onFinish={handlePost}
        >
          <Form.Item label="Task" name="task">
            <Input name="name" id="dataName" value={props.newData} onChange={(event) => props.onChangeForm(event)} />
          </Form.Item>
          <Button type="primary" onClick={() => props.onSubmitData()}>
            Search Task
          </Button>
        </Form>

{/* <form action="http://www.localhost:5000/put" method="POST">
  <div>
    <label htmlFor="say">Task: </label>
    <input name="taskName" id="TaskName" ></input>
  </div>
  <div>
    <button>Put Task</button>
  </div>
</form> */}
      </div>
      {/* {console.log(rows)} */}
    </div>
  );
}
