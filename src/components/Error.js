import React from 'react'
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(error);
  return (
    <div>
        <h1>Oops !!</h1>
        <h3>Something went Wrong</h3>
        <h2>{err.status} ErrorMessage:{err.statusText}</h2>
    </div>
  )
}

export default Error