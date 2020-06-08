import React from 'react'
import Typing from 'react-typing-animation';

export default function Atyping(props) {
  return (
    <div>
      <Typing speed={100} loop={true}>
        {props.info1}
        <Typing.Backspace count={20} />
    {/* <Typing.Speed ms={200} /> */}
    </Typing>
    </div>
  )
}
