import React from 'react'

export default function HeaderMenu() {
  const img1 = "./Img/sns.jpg";
  const img2 = "./Img/user.png";
  return (
    <div className="header-menu">
      <ul className="header-1">
        <li><a href='/'><img className="sns" src= {img1}></img></a></li>
        <li className="li-menu"><a href='/' className="header-top-menu">BLOG</a></li>
      </ul>
      <ul className="header-2">
        <li><a href='/'><img className="user" src= {img2}></img></a></li>
        <li><a href='/' className="header-top-menu">JOIN US</a></li>
        <li><a href='/' className="header-top-menu">LOGIN</a></li>
        </ul>
    </div>
  )
}
