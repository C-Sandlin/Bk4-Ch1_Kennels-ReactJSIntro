import React, { Component } from 'react';

export default class Joke extends Component {
    tellNewJoke = () => {

        const joke = {
            id: 1005,
            type: "Sean Joke",
            setup: "What do you call a fly with no wings?",
            punchline: "A Walk..."
        }

        this.props.setNewJokeState(joke);
    }

    render() {
        return (
            <div>
                <h3>Type of Joke: {this.props.type}</h3>
                <h4>{this.props.setup}</h4>
                <p>{this.props.punchline}</p>
                <button onClick={this.tellNewJoke}>Tell a new Joke</button>
            </div>
        )
    }
}