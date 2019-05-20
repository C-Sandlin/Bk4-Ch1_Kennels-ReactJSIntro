import React, { Component } from 'react';

export default class AnimalList extends Component {
    render() {
        return (
            <div className="animals">
                <h3>Animals:</h3>
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id}>
                            <h4>Name: {animal.name}</h4>
                            <p>Animal: {animal.animal}</p>
                        </div>
                    )
                }
            </div>
        );
    }
}