import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("newuser", JSON.stringify({ username, password }));
    navigate("/");
    console.log(localStorage.getItem("newuser"));
  };
  return (
    <div>
      <main class="form-signin w-100 m-5 ml-300px text-center">
        <form onSubmit={handlesubmit}>
          <div>
            <img
              class="mb-4"
              src="https://tse1.explicit.bing.net/th?id=OIP.bGE2gLiQbhDsNgItxxDRmAHaHa&pid=Api&P=0"
              alt=""
              width="100"
              height="100"
            />

            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <label for="floatingPassword">Password</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Register;
