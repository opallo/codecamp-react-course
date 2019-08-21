import React from 'react'

export default function Product(props) {

  function showInfo() {
    alert(props.name)
  }
  
  return (
    <div className="product-card">
      <button onClick={showInfo}>{props.name}</button>
      <p>{props.description}</p>
      <p>{'$'}{props.price}</p>
    </div>
  )
  


}