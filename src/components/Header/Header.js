import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './minced-logo.png'

export default class Header extends Component {
    render() {
        return (
            <>
            <nav>
            <Link to='/home'>Home</Link> &bull; <Link to='/add'>Add Recipe</Link> &bull; <Link to="/">About</Link>
            </nav>
                <header role="banner">
            <h1><Link to="/home"><img src={logo} alt="MuchToDo" className="logo" />Minced</Link></h1>
                    <p className="tagline">All of your recipes saved and organized in one place.</p>
                    <hr />
            </header>
            </>
        )
    }
}
