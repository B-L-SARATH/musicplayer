import React from "react";
import { useState } from "react";
function Fetch() {
  const [datas, setdatas] = useState([]);
  const handleget = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setdatas(data))
      .catch((err) => {
        console.log(err.message);
        console.log("some error occured");
      });
    console.log(datas);
  };
  const handlecreate = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({ name: "sarath" }),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setdatas([...datas, data]));
  };
  const handleupdate = () => {
    let newdata = { name: "sunny" };
    fetch("https://jsonplaceholder.typicode.com/users/2", {
      method: "PUT",
      body: JSON.stringify(newdata),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let updatedlist = [...datas];
        let index = updatedlist.findIndex((item) => item.id == 1);
        updatedlist[index] = newdata;
        setdatas(updatedlist);
      });
  };
  const handledelete = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "DELETE",
    })
      .then((response) => response.json())
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
        <h1>Fetch method for apis</h1>
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

export default Fetch;
