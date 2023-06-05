import React from 'react'
import "./button.css"

// function Button() {
//   return (
//     <button type="submit">Register Doctor</button>
//   )
// }

const Button = ({loading,disabled,text,onClick,...rest}) => {

  const handleClick = (e) => {

    e.preventDefault()
    if (!loading && !disabled && onClick) {
      onClick();
    }
  } 

  return (
    <button {...rest}
      onClick={handleClick}
      type="submit"
      
    >
      
        {loading? "loading..." : text } 
    </button>
  )
}

export default Button


