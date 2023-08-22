import React, { useState } from 'react';
import './submitform.css';

const Submitform = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <div className="main_container">
          <div className="inputs">
            <label>Username</label>
            <input
              name="username"
              placeholder="Enter the Username"
              autoComplete="off"
              value={inputs.username}
              onChange={handleInputs}
            />
            <label>Email</label>
            <input
              name="email"
              placeholder="Enter the Email"
              autoComplete="off"
              value={inputs.email}
              onChange={handleInputs}
            />
            <label>Password</label>
            <input
              name="password"
              value={inputs.password}
              placeholder="Enter the Password"
              onChange={handleInputs}
            />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <div className="output">
              <h5>UserName: {inputs.username}</h5>
              <h5>Email: {inputs.email}</h5>
              <h5>Password: {inputs.password}</h5>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Submitform;
