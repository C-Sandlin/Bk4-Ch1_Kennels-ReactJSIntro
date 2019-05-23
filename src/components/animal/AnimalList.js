import React, { Component } from 'react';
// import { isTemplateElement } from '@babel/types';
import AnimalItem from './AnimalItem';


export default class AnimalList extends Component {
    determineIfOwner = (animal) => {
        console.log(animal);
        let AllOwners = [];
        if (animal.ownerId) {
            AllOwners = this.props.owners.find(owner => owner.id === animal.ownerId).name;
        }
        return AllOwners;

    }
    render() {
        return (
            <div className="animals">
                <div className="animalButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")
                        }
                        }>
                        Admit Animal
                    </button>
                </div>
                <h3>Animals:</h3>
                {
                    this.props.animals.map(animal => {

                        return <AnimalItem key={animal.id} animal={animal} deleteAnimal={this.props.deleteAnimal} owner={this.determineIfOwner(animal)} />
                    })
                }
            </div>
        );
    }
}

// owner={AllOwners}