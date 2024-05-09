import React from 'react'
import "./index.scss"

const CheckBox = ({checked,onComplete}) => {
  return (
    <div className='row'>
        <label for='product-45-45'>
            <input type='checkbox' checked={checked} style={{float: 'left'}} id='product-45-45' onChange={() => onComplete()}></input>
            <div className='accord-text'></div>
        </label>
    </div>
  )
}

export default CheckBox