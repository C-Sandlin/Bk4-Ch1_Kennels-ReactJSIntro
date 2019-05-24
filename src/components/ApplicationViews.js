import { Route, Redirect } from "react-router-dom"
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
import AnimalEditForm from "./animal/AnimalEditForm";
import Login from './authentication/login';
import OwnerForm from './owner/OwnerForm';


class ApplicationViews extends Component {
    // creating empty current state but defining where empty values will be
    state = {
        owners: [],
        employees: [],
        locations: [],
        animals: []
    }

    // Check if credentials are in local storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    addAnimal = (newAnimalObj) => {
        AnimalManager.addAn(newAnimalObj)
            .then(() => AnimalManager.getAll())
            .then(animalResults =>
                this.setState({
                    animals: animalResults
                })
            ).then(() => this.props.history.push("/animals"))
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

    // DELETE EMPLOYEES
    deleteEmployee = (id) => {
        const newState = {}

        EmployeeManager.deleteEmployee(id)
            .then(() => EmployeeManager.getAll())
            .then(employees => {
                newState.employees = employees
            })
            .then(() => {
                this.props.history.push("/employees")
                this.setState(newState);
            })

    }

    updateAnimal = (editedAnimalObject) => {
        return AnimalManager.edit(editedAnimalObject)
            .then(() => AnimalManager.getAll())
            .then(animals => {
                this.setState({
                    animals: animals
                })
            });
    }

    // START HERE //
    addOwner = (newOwnerObj) => {
        OwnerManager.addOwner(newOwnerObj)
            .then(() => OwnerManager.getAll())
            .then(ownerResults =>
                this.setState({
                    owners: ownerResults
                })
            ).then(() => this.props.history.push("/owners"))
    }


    // Order is: render, once component is mounted, then runs ComponentDidMount, which sets new state, which causes it to render once more.
    componentDidMount() {
        // Declaring new state
        const newState = {}

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

                <Route path="/login" component={Login} />

                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <LocationList locations={this.state.locations} employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalList
                            className="AnimalList"
                            animals={this.state.animals}
                            owners={this.state.owners}
                            deleteAnimal={this.deleteAnimal}
                            {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route
                    exact path="/animals/:animalId(\d+)/edit" render={props => {
                        if (this.isAuthenticated()) {
                            return <AnimalEditForm {...props} employees={this.state.employees} updateAnimal={this.updateAnimal} animals={this.state.animals} />
                        } else {
                            return <Redirect to="/login" />
                        }

                    }}
                />

                <Route
                    exact path="/animals/:animalId(\d+)" render={(props) => {
                        if (this.isAuthenticated()) {
                            let animal = this.state.animals.find(animal =>
                                animal.id === parseInt(props.match.params.animalId)
                            )
                            return (
                                <AnimalDetail
                                    {...props}
                                    deleteAnimal={this.deleteAnimal}
                                    animal={animal}
                                    owners={this.state.owners}
                                />
                            );
                        } else {
                            return <Redirect to="/login" />
                        }
                    }}
                />

                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList
                            title="Employees:" employees={this.state.employees} animals={this.state.animals} deleteEmployee={this.deleteEmployee} deleteAnimal={this.deleteAnimal} updateAnimal={this.updateAnimal} owners={this.state.owners} {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route exact path="/owners" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnersList owners={this.state.owners} {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/owners/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerForm owners={this.state.owners} {...props} addOwner={this.addOwner} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/animals/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalForm {...props}
                            addAnimal={this.addAnimal}
                            owners={this.state.owners}
                            employees={this.state.employees}
                            toggle={this.toggle}
                            isOpen={this.state.modal}
                        />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/search" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <SearchResults
                            inputHandler={this.inputHandler}
                            input={this.props.input}
                            animalResults={this.props.animalResults}
                            ownerResults={this.props.ownerResults}
                            locationResults={this.props.locationResults}
                            employeeResults={this.props.employeeResults} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
            </>

        )
    }
}

export default withRouter(ApplicationViews)