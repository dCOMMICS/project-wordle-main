import React from 'react'
import ReactDom from "react-dom/client";

function App (props) {
    return  <h1> Muray Thau </h1>
}


// react V18
const root = ReactDom.createRoot(document.getElementById ("root"));
root.render( <App />);

// ignore this code snippet

const index = () => {
  return (
    <div>index</div>
  )
}

export default index

// lower 