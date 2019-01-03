import React from 'react'

const Searchbar = (props) => {
  return (
    <div>
      <input
        type='text'
        ref={(inp) => { this.inputElement = inp }}
        placeholder='Search...'
        onChange={props.changed}
        value={props.name} />
      <input type='checkbox' />Only show products in stock
    </div>
  )
}

export default Searchbar
