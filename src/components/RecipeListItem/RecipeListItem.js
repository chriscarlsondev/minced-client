import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class RecipeListItem extends Component {
    render() {
        return (
            <li><Link to={`/recipe/${this.props.id}`}>{ this.props.title }</Link></li>
        )
    }
}
