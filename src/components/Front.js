import React from 'react'
import style from "./style.css";
import Bar from "./Bar";
import Table from "./Table";
const front = () => {

  
  return (
    <div className="pro">
    <div className="table">
    <Table />
    </div>
    
    <div className="bar">
      <Bar val={56}/>
    </div>
    </div>
  )
}

export default front
