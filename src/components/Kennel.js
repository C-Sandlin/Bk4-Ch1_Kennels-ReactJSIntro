import React, { Component } from 'react';
import EmployeeList from "./employee/EmployeeList";
import LocationList from "./LocationList";  // Import EmployeeList component
import Joke from "./joke/Joke";
import AnimalList from "./AnimalList";


export default class Kennel extends Component {


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
        { id: 1, name: "Zedd", animal: "Zebra" },
        { id: 2, name: "Geoff", animal: "Girraffe" },
        { id: 3, name: "Marvis", animal: "Monkey" },
        { id: 4, name: "Laura", animal: "Llama" }
    ]

    state = {
        id: 75,
        type: "Inappropriate",
        setup: "What do you give to a lemon in need?",
        punchline: "Lemonaid.",
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
    }


    setNewJokeState = (jokeObj) => {
        this.setState({
            id: jokeObj.id,
            type: jokeObj.type,
            setup: jokeObj.setup,
            punchline: jokeObj.punchline
        })
    }

    render() {
        return (
            <div>
                <h1>Student Kennels</h1>
                <EmployeeList title="Full Time" employees={this.state.employees} />
                <hr></hr>
                <LocationList numberOfLocations="2" locations={this.state.locations} />
                <hr></hr>
                <AnimalList animals={this.state.animals} />

                <hr></hr>

                <Joke
                    type={this.state.type}
                    setup={this.state.setup}
                    punchline={this.state.punchline}
                    setNewJokeState={this.setNewJokeState}
                />
            </div>
        );
    }
}

