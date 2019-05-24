import React, { Component } from "react";
import person from "../employee/person.jpg";
import { Link } from 'react-router-dom';


export default class AnimalItem extends Component {

    render() {
        return (
            <article className="employee-card">
                <img src={person} className="icon--employee" alt="Uncle Owen" />
                <h3>{this.props.employee.name}</h3>

            </article>
        )
    }
}

