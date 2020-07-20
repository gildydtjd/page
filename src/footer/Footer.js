import React from 'react'
import './footer.css';

export default function Footer() {
  return (
    <div className ='footer'>
      <ul className = 'footer_ul'>
      <li onClick={() => window.scrollTo(0,0)}>Home</li>
        <li>ㆍ</li>
        <li onClick={() => window.scrollTo(0,950)}>Intro</li>
        <li>ㆍ</li>
        <li onClick={() => window.scrollTo(0,950)}>Skills</li>
        <li>ㆍ</li>
        <li onClick={() => window.scrollTo(0,2010)}>Project</li>
        <li>ㆍ</li>
        <li onClick={() => window.scrollTo(0,3700)}>Contact</li>
      </ul>
      <h2>
        <p>©2020 YONGSUNG GIL</p>
      </h2>
    </div>
  )
}
