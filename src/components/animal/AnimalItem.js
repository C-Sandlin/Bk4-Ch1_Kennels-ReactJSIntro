import React, { Component } from "react";
import dog from "./DogIcon.svg"
import { Link } from 'react-router-dom';


export default class AnimalItem extends Component {
    state = {
        saveDisabled: false
    }

    handleClick = (e) => {
        console.log("click", e);
        // Disabling the ability to click delete multiple times after it is clicked once
        this.setState({
            saveDisabled: true
        })
        this.props.deleteAnimal(this.props.animal.id);
    }

    render() {
        return (
            <article className="card-body">
                <img src={dog} className="icon--dog" alt="dog" />
                <h3>{this.props.animal.name}</h3>
                <p>Owner: {this.props.owner}</p>
                <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push(`/animals/${this.props.animal.id}/edit`);
                    }}
                >Edit</button>
                <button onClick={this.handleClick} disabled={this.state.saveDisabled}>Delete</button>
            </article>
        )
    }
}

