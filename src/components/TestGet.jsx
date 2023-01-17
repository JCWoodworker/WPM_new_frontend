import React, {useState } from "react";
import axios from "axios";

const TestGet = () => {

  const getLocalhost = async () => {
    debugger
    const response = await axios.get("http://localhost:3000/test");
  }

  return (
    <div  className='clickable-button' onClick={getLocalhost}>
      <h1>Testing a Get Request</h1>
    </div>
  );
}

export default TestGet;