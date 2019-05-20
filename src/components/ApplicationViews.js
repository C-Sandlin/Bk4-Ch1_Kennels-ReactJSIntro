import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './AnimalList'
import LocationList from './LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './OwnersList'


class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Doodles", animal: "Donkey", ownerId: 6 },
        { id: 2, name: "Jack", animal: "Gecko", ownerId: 5 },
        { id: 3, name: "Angus", animal: "Frog", ownerId: 4 },
        { id: 4, name: "Henley", animal: "Lizard", ownerId: 3 },
        { id: 5, name: "Derkins", animal: "Snake", ownerId: 2 },
        { id: 6, name: "Checkers", animal: "Muskrat", ownerId: 1 }
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay", phone: "205.281.6479" },
        { id: 2, name: "Emma Beaton", phone: "251.341.6455" },
        { id: 3, name: "Dani Adkins", phone: "278.321.6404" },
        { id: 4, name: "Adam Oswalt", phone: "205.301.6465" },
        { id: 5, name: "Dude Bangs", phone: "205.281.6468" },
        { id: 6, name: "Angela Lee", phone: "205.501.6486" }
    ]



    state = {
        owners: this.ownersFromAPI,
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
    }


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList title="Employees:" employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnersList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews