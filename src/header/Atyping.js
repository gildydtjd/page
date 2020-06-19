import React from 'react'
import Typing from 'react-typing-animation';
import "./typings.css"
export default function Atyping(props) {
  return (
    <div>
      <Typing speed={100} loop={true} className="Typing_css">
        {props.info1}
        <Typing.Backspace count={30} />
    {/* <Typing.Speed ms={200} /> */}
    </Typing>
    </div>
  )
}
