import React, { Component } from 'react'


export default class EmployeeList extends Component {
    render() {
        return (
            <article className="employees">
                <h2>{this.props.title}</h2>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            {employee.name}
                        </div>
                    )
                }
            </article>
        );
    }
}