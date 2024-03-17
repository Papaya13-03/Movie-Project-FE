import React from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";

const override = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "background-color": "black"
}

const Loader = ({loading}) => {

  return (
    <ScaleLoader cssOverride={override} loading={loading} color="#36d7b7" />
  )
}

export default Loader