import React, { Component } from 'react'
import person from "./person.jpg"
import "./employee.css"
import AnimalItem from "../animal/AnimalItem"



export default class EmployeeList extends Component {


    render() {
        return (
            <section className="employees">
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id} className="card card--employee">
                            <div className="card-body">
                                <div className="card-title">
                                    <img src={person} className="icon--employee" alt="uncle owen" />
                                    <h5>{employee.name}</h5>
                                    <button
                                        onClick={() => this.props.deleteEmployee(employee.id)}
                                        className="card-link">Delete</button>
                                </div>

                                <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                                <div className="animals--caretaker">
                                    {
                                        this.props.animals
                                            .filter(anml => anml.employeeId === employee.id)
                                            .map(anml => <AnimalItem key={anml.id} animal={anml} {...this.props} />)
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>
        );
    }
}
