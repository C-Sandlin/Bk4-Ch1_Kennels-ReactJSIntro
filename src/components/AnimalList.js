import React, { Component } from 'react';

export default class AnimalList extends Component {
    // getOwner = (ownerId) => {
    //     return ownerId = this.props.animals.ownerId;
    // }

    render() {
        return (
            <div className="animals">
                <h3>Animals:</h3>
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id}>
                            <h5>Name: {animal.name}</h5>
                            <p>Animal: {animal.animal}</p>
                            <p>Owner:&nbsp;
                            {this.props.owners.find(owner => owner.id === animal.ownerId).name}
                            </p>
                        </div>
                    )
                }
            </div>
        );
    }
}


