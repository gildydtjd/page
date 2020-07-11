import React from 'react'
import "../header.scss";

export default function HeaderMenu() {
  const img1 = "./Img/sns.jpg";
  const img2 = "./Img/kakao.png";
  return (
    <div className="header-menu">
      <ul className="header-1">
        <li><a href='/'><img className="sns" src= {img1} alt=""></img></a></li>
        <li><a href='https://open.kakao.com/o/scLoQZkc' target="_blank" rel="noopener noreferrer"><img className="sns1" src= {img2} alt=""></img></a></li>
        <li className="li-menu"><a href='/' className="header-top-menu">BLOG</a></li>
      </ul>
    </div>
  )
}
