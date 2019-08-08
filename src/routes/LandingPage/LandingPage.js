import React, { Component } from 'react'
import LinkButton from '../../components/LinkButton/LinkButton'

export default class LandingPage extends Component {
  render() {
      return <>
        <section className="landing-page-section">
        <header>
            <h2>Easily add new recipes</h2>
        </header>
        <p>[<em>placeholder for screenshot of new recipe interface</em>]</p>
        </section>
        <section className="landing-page-section">
        <header>
            <h2>Include as much helpful information as you'd like</h2>
        </header>
        <p>[<em>placeholder for screenshot of adding a recipe</em>]</p>
        <p>Each recipe can include a description, time to prepare, time to cook, list of ingredients, step-by-step instructions and any additional notes</p>
        </section>
        <section className="landing-page-section">
        <header>
            <h2>Delete recipes</h2>
        </header>
        <p>[<em>placeholder for screenshot of deleting a recipe</em>]</p>
        <p>Did things not pan out? Easily delete a recipe from your collection</p>
        </section>
        <section className="landing-page-section">
        <header>
            <h2>Let's get to cookin'.</h2>
        </header>
        <LinkButton to='/home'>Get Started</LinkButton>
              </section>
    </>
  }
}


