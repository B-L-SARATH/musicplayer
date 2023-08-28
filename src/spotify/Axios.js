import axios from "axios";
import React from "react";
import { useState } from "react";
function Axios() {
  const [datas, setdatas] = useState([]);
  const handleget = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        console.log(data);
        setdatas(data.data);
      })
      .catch((err) => {
        console.log(err.message);
        console.log("some error occured");
      });
    console.log(datas);
  };
  const handlecreate = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        data: JSON.stringify({ name: "sarath" }),
        headers: { "Content-type": "application/json" },
      })
      .then((data) => {
        console.log(data.data.data);
        setdatas([...datas, { name: "sarath" }]);
      });
  };
  const handleupdate = () => {
    let newdata = { name: "sunny" };
    axios.put("https://jsonplaceholder.typicode.com/users/2", {
    data: JSON.stringify(newdata),
    })
      .then((data) => {
        console.log(data);
        let updatedlist = [...datas];
        let index = updatedlist.findIndex((item) => item.id == 2);
        updatedlist[index] = newdata;
        setdatas(updatedlist);
      });
  };
  const handledelete = () => {
    axios.delete("https://jsonplaceholder.typicode.com/users/1", {
    })
      .then((data) => {
        console.log(data);
        let updatedlist = [...datas];
        let index = updatedlist.findIndex((item) => item.id == 1);
        updatedlist.shift();
        setdatas(updatedlist);
      });
  };
  return (
    <div>
      <div>
        <h1>Axios for apis</h1>
        <button onClick={handleget} className="btn btn-primary">
          {" "}
          Get
        </button>
        <button onClick={handlecreate} className="btn btn-primary">
          {" "}
          post
        </button>
        <button onClick={handleupdate} className="btn btn-primary">
          {" "}
          update
        </button>
        <button onClick={handledelete} className="btn btn-primary">
          {" "}
          delete
        </button>
      </div>
      <div>
        <ul>
          {datas.length > 0 &&
            datas.map((item, index) => {
              return <li key={index}>{item.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default Axios;
