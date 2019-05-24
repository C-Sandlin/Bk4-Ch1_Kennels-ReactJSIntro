import React, { Component } from "react"
import NavBar from "../nav/NavBar"
import ApplicationViews from "../ApplicationViews"
import AnimalManager from "../../modules/AnimalManager"
import EmployeeManager from "../../modules/EmployeeManager";
import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"
import OwnerManager from "../../modules/OwnerManager";
import LocationManager from "../../modules/LocationManager";
import { withRouter } from 'react-router'


class Kennel extends Component {
    state = {
        input: "",
        animalResults: [],
        ownerResults: [],
        locationResults: [],
        employeeResults: []
    }


    getResults = (inputText) => {
        const newState = {}
        newState.input = inputText
        AnimalManager.search(newState.input)
            .then(animals => {
                newState.animalResults = animals
            })
            .then(() => EmployeeManager.search(newState.input))
            .then(employees => {
                newState.employeeResults = employees
            })
            .then(() => OwnerManager.search(newState.input))
            .then(owners => {
                newState.ownerResults = owners
            })
            .then(() => LocationManager.search(newState.input))
            .then(locations => {
                newState.locationResults = locations
            })
            .then(() => this.setState(newState))
            .then(() => this.props.history.push("/search"))
    }



    render() {
        return (
            <>
                <NavBar inputHandler={this.inputHandler} input={this.state.input} getResults={this.getResults} />
                <ApplicationViews
                    input={this.state.input}
                    animalResults={this.state.animalResults}
                    ownerResults={this.state.ownerResults}
                    locationResults={this.state.locationResults}
                    employeeResults={this.state.employeeResults} />
            </>
        )
    }
}

export default withRouter(Kennel)