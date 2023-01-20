import React, {useState } from "react";
import axios from "axios";

const TestGet = () => {
  const [data, setData] = useState(null);

  const getLocalhost = async () => {
    const response = await axios.get("http://localhost:3000/");
    setData(response.data);
    setTimeout(() => {
      setData(null);
    }
    , 3000);
  }

  const message = data ? data.message : "No message yet";

  return (
    <div  className='clickable-button' onClick={getLocalhost}>
      <h1>{message}</h1>
    </div>
  );
}

export default TestGet;