import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Signup(props) {
  // useState hook
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  // useHistory hook for redirecting
  let history = useHistory();

  // Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = userData;
    // API Call
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Account created successfully", "success");
      history.push("/");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const getValue = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container col-md-6">
        <h2 className="mb-3">Create An Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              name="name"
              onChange={getValue}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={getValue}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={getValue}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              name="cpassword"
              onChange={getValue}
              minLength={5}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
    </>
  );
}
