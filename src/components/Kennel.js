import React, { Component } from 'react';
import EmployeeList from "./employee/EmployeeList";
import LocationList from "./LocationList";  // Import EmployeeList component


export default class Kennel extends Component {
    render() {
        return (
            <div>
                <h1>Student Kennels</h1>
                <EmployeeList title="Full Time" />
                <LocationList numberOfLocations="2" />
            </div>
        );
    }
}

