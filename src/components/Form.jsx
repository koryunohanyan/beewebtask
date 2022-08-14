import React from "react";
import { useState } from "react";

export default function Form({ title, handleClick }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
       
      }}
    >
      <div style={{display:"flex", flexDirection:"column", gap:"15px", width:"100%", alignItems:"center"}}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
        />
        <button onClick={() => handleClick(email, pass)}>{title}</button>
      </div>
    </div>
  );
}
