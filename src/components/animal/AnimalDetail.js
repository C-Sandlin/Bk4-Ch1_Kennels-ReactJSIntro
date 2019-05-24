import React, { Component } from "react";
import dog from "./DogIcon.svg";

export default class AnimalDetail extends Component {

    render() {
        return (
            <section className="animal">
                {
                    (this.props.animal) ?
                        (
                            <div key={this.props.animal.id} className="card">
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <img src={dog} className="icon--dog" alt="animal" />
                                        {this.props.animal.name}
                                    </h4>
                                    <p>Owner:&nbsp; {
                                        (this.props.owners.length > 0) ?
                                            this.props.owners.find(owner => owner.id === this.props.animal.ownerId).name :
                                            ""
                                    }
                                    </p>
                                    <button onClick={
                                        () => {
                                            this.setState(
                                                { saveDisabled: true },
                                                () => this.props.deleteAnimal(this.props.animal.id)
                                            )
                                        }
                                    }
                                        className="card-link">Delete</button>
                                </div>
                            </div>
                        )
                        : null
                }

            </section >
        )
    }
}
