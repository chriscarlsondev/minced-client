import React, { Component } from 'react'
import RecipeList from '../../components/RecipeList/RecipeList'
import LinkButton from '../../components/LinkButton/LinkButton'

export default class HomePage extends Component {
    render() {
        return (
            <>
            <section>
                <LinkButton to='/add'>Add Recipe</LinkButton>
            </section>
            <section>
                <RecipeList />
                </section>
                </>
        )
    }
}
