import React, { Component } from 'react';
// import { isTemplateElement } from '@babel/types';
import AnimalItem from './AnimalItem';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



export default class AnimalList extends Component {

    state = {
        modal: false
    }

    determineIfOwner = (animal) => {

        let AllOwners = [];
        if (animal.ownerId) {
            AllOwners = this.props.owners.find(owner => owner.id === animal.ownerId).name;
        }
        return AllOwners;

    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
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
                        <button type="button"
                            className="btn btn-success"
                            onClick={this.toggle} >
                            Test Button
                    </button>
                    </div>
                    <h3>Animals:</h3>
                    {
                        this.props.animals.map(animal => {

                            return <AnimalItem key={animal.id} animal={animal} deleteAnimal={this.props.deleteAnimal} owner={this.determineIfOwner(animal)} {...this.props} />
                        })
                    }
                </div>
                <div>

                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Test Modal</ModalHeader>
                        <ModalBody>
                            The modal worked!
          </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}
