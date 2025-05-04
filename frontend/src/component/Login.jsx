import React, { useState } from 'react'

function Login() {
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    

    const sendDate=(e)=>{
        e.preventDefault()
        console.log(email,password)
    }
  return (
    
    <div
  style={{
    margin: "5rem auto",
    padding: "2rem",
    width: "40%",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  }}
>
  <center>
    <form onSubmit={sendDate}>
      <label
        style={{
          display: "block",
          textAlign:'left',
          marginBottom: "0.5rem",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        E-mail:
      </label>
      <input
        type="email"
        id="email"
        onChange={(e) => {
          setemail(e.target.value);
        }}
        style={{
          width: "100%",
          padding: "0.4rem",
          marginBottom: "0.5rem",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      <label
        style={{
          display: "block",
          textAlign:'left',
          marginBottom: "0.5rem",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        Password:
      </label>
      <input
        type="password"
        id="password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
        style={{
          width: "100%",
          padding: "0.4rem",
          marginBottom: "1.5rem",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      <input
        type="submit"
        value="Login"
        style={{
          display: "block",
          width: "100%",
          padding: "1rem",
          backgroundColor: "#3498db",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      />
    </form>
  </center>
</div>


  )
}

export default Login
