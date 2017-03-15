import React  from 'react'

export default({ surfboard }) => {

  const showDecimal = (number) => {
    return number / 100
  }

  return (
    <div>
      <h3>{surfboard.name}</h3>
      <hr />
      <div id="board-details">
        <p>Length: {surfboard.length} | Price: ${showDecimal(surfboard.price)} | Quantity: {surfboard.quantity}</p>
      </div>
    </div>
  )
}