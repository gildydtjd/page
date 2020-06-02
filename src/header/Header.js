import React, { Component } from 'react'
import "./header.css";
import HeaderMenu from './headerContents/HeaderMenu';
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <HeaderMenu />
      </div>
    )
  }
}
