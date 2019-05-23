import { Route } from 'react-router-dom';
import React, { Component } from "react";
import AnimalList from './animal/AnimalList';
import LocationList from './location/LocationList';
import EmployeeList from './employee/EmployeeList';
import OwnersList from './owner/OwnersList';
import AnimalManager from "../modules/AnimalManager";
import EmployeeManager from "../modules/EmployeeManager";
import OwnerManager from "../modules/OwnerManager";
import LocationManager from "../modules/LocationManager";
import SearchResults from "../components/search/SearchResults";
import AnimalDetail from "./animal/AnimalDetail";
import { withRouter } from 'react-router'
import AnimalForm from "./animal/AnimalForm";


class ApplicationViews extends Component {
    // creating empty current state but defining where empty values will be
    state = {
        owners: [],
        employees: [],
        locations: [],
        animals: []
    }

    deleteAnimal = (animalId) => {
        const newState = {}

        AnimalManager.deleteAnimal(animalId)
            .then(() => AnimalManager.getAll())
            .then(animals => {
                console.log("animals", animals)
                newState.animals = animals
            })
            .then(() => {
                // This fakes in history to take you back to animal list when animal is deleted, so it doesn't show a 404 screen
                this.props.history.push("/animals")
                this.setState(newState);
            })
    }

    addAnimal = (newAnimalObj) => {
        AnimalManager.addAn(newAnimalObj)
            .then(() => AnimalManager.getAll())
            .then(animalResults =>
                this.setState({
                    animals: animalResults
                })
            ).then(() => this.props.history.push("/animals"))
    }


    // Order is: render, once component is mounted, then runs ComponentDidMount, which sets new state, which causes it to render once more.
    componentDidMount() {
        // Declaring new state
        const newState = {};

        AnimalManager.getAll()
            .then(animals => {
                newState.animals = animals
            })
            .then(() => EmployeeManager.getAll())
            .then(employees => {
                newState.employees = employees
            })
            .then(() => OwnerManager.getAll())
            .then(owners => {
                newState.owners = owners
            })
            .then(() => LocationManager.getAll())
            .then(locations => {
                newState.locations = locations
            })
            // sets new state below
            .then(() => this.setState(newState))
    }


    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList
                        className="AnimalList"
                        animals={this.state.animals}
                        owners={this.state.owners}
                        deleteAnimal={this.deleteAnimal}
                        {...props} />
                }} />

                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!animal) {
                        animal = { id: 404, name: "404" }
                    }

                    return <AnimalDetail animal={animal}
                        {...props}
                        deleteAnimal={this.deleteAnimal}
                    />
                }} />

                <Route path="/employees" render={(props) => {
                    return <EmployeeList title="Employees:" employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnersList owners={this.state.owners} />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        owners={this.state.owners}
                        employees={this.state.employees} />
                }} />
                <Route path="/search" render={(props) => {
                    return <SearchResults
                        inputHandler={this.inputHandler}
                        input={this.props.input}
                        animalResults={this.props.animalResults}
                        ownerResults={this.props.ownerResults}
                        locationResults={this.props.locationResults}
                        employeeResults={this.props.employeeResults} />
                }} />
            </>

        )
    }
}

export default withRouter(ApplicationViews)