import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header role="banner">
            <h1><Link to="/home">Minced</Link></h1>
            <h2>All of your recipes saved and organized in one place.</h2>
          </header>
        )
    }
}
