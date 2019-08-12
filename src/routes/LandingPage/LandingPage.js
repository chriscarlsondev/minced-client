import React, { Component } from 'react'
import LinkButton from '../../components/LinkButton/LinkButton'
import Screenshot1 from './screenshot-1.png'
import Screenshot2 from './screenshot-2.png'
import Screenshot3 from './screenshot-3.png'
export default class LandingPage extends Component {
  render() {
      return <>
        <section className="landing-page-section">
        <header>
            <h2>Easily add new recipes</h2>
        </header>
        <img src={Screenshot1} className="screenshot" alt="Screenshot of Add recipe page" />
        </section>
        <section className="landing-page-section">
        <header>
            <h2>Include as much helpful information as you'd like</h2>
        </header>
        <img src={Screenshot2} className="screenshot" alt="Screenshot of detailed recipe information" />
        <p>Each recipe can include a description, time to prepare, time to cook, list of ingredients, step-by-step instructions and any additional notes</p>
        </section>
        <section className="landing-page-section">
        <header>
            <h2>Delete recipes</h2>
        </header>
        <img src={Screenshot3} className="screenshot" alt="Screenshot of ability to delete a recipe" />
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


