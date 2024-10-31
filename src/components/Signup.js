import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth= localStorage.getItem("user")
    if(auth)
    {
      navigate()
    }
  })

  const collectData = async () => {
    console.log(name, email, Password);

    try {
      let result = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify({ name, email, Password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }

      result = await result.json();
      console.log(result);
      localStorage.setItem("user", JSON.stringify(result));

      if (result) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error in collectData:", error);
    }
  };


  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        className="inputBox"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        className="inputBox"
        type="text"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={collectData} type="button" className="appButton">
        SignUp
      </button>
    </div>
  );
};

export default Signup;
