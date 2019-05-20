import React, { Component } from 'react'


export default class EmployeeList extends Component {
    render() {
        return (
            <article>
                <h1>Employee List</h1>
                <h2>{this.props.title}</h2>
                <section>Jessica Younker</section>
                <section>Jordan Nelson</section>
                <section>Zoe LeBlanc</section>
                <section>Blaise Roberts</section>
            </article>
        );
    }
}