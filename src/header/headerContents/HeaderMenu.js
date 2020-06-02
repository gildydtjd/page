import React from 'react'

export default function HeaderMenu() {
  return (
    <div className="header-menu">
      <ul className="header-1">
        <li><a><img className="sns" src="./Img/sns.jpg"></img></a></li>
        <li className="li-menu"><a className="header-top-menu">BLOG</a></li>
      </ul>
      <ul className="header-2">
        <li><a><img className="user" src="./Img/user.png"></img></a></li>
        <li><a className="header-top-menu">JOIN US</a></li>
        <li><a className="header-top-menu">LOGIN</a></li>
        </ul>
    </div>
  )
}
