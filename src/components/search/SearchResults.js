import React, { Component } from 'react';

export default class SearchResults extends Component {

    checkAnimalResults = () => {
        if (this.props.animalResults.length === 0) {
            return (
                <div>
                    <h6>None</h6>
                </div>
            )
        } else {
            return (
                this.props.animalResults.map(animal =>
                    <div key={animal.id}>
                        <h6>{animal.name}</h6>
                        <p>{animal.breed}</p>
                    </div>
                ))
        }
    }

    checkLocationResults = () => {
        if (this.props.locationResults.length === 0) {
            return (
                <div>
                    <h6>None</h6>
                </div>
            )
        } else {
            return (
                this.props.locationResults.map(location =>
                    <div key={location.id}>
                        <h6>{location.name}</h6>
                        <p>{location.address}</p>
                    </div>
                ))
        }
    }

    checkEmployeeResults = () => {
        if (this.props.employeeResults.length === 0) {
            return (
                <div>
                    <h6>None</h6>
                </div>
            )
        } else {
            return (
                this.props.employeeResults.map(employee =>
                    <div key={employee.id}>
                        <h6>{employee.name}</h6>
                    </div>
                ))
        }
    }

    checkOwnerResults = () => {
        if (this.props.ownerResults.length === 0) {
            return (
                <div>
                    <h6>None</h6>
                </div>
            )
        } else {
            return (
                this.props.ownerResults.map(owner =>
                    <div key={owner.id}>
                        <h6>{owner.name}</h6>
                        <p>{owner.phone}</p>
                    </div>
                ))
        }
    }




    render() {
        return (
            <>
                <h1>Search Results for "{this.props.input}":</h1>
                <div className="search-results">
                    <div className="animalResults">
                        <h3>Animal Results</h3>
                        {
                            this.checkAnimalResults()
                        }
                    </div>
                    <div className="ownerResults">
                        <h3>Owner Results</h3>
                        {
                            this.checkOwnerResults()
                        }
                    </div>
                    <div className="locationResults">
                        <h3>Location Results</h3>
                        {
                            this.checkLocationResults()
                        }
                    </div>
                    <div className="employeeResults">
                        <h3>Employee Results</h3>
                        {
                            this.checkEmployeeResults()
                        }
                    </div>
                </div>
            </>
        )
    }
}