import React, { Component } from 'react';
import EmployeeItem from "../employee/EmployeeItem";
import employee from "../employee/employee.css"

export default class LocationList extends Component {
    render() {
        return (
            <div className="locations">
                <h3>Locations:</h3>
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            <div>
                                <h4>{location.name}</h4>
                                <p>{location.address}</p>
                            </div>

                            <h6 className="card-subtitle mb-2 text-muted">Employees at this location:</h6>
                            <div className="employees--location">
                                {
                                    this.props.employees
                                        .filter(employee => employee.locationId === location.id)
                                        .map(employee => <EmployeeItem key={employee.id} employee={employee} {...this.props} />)
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}