import React, { Component } from "react"
import { Link } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import index from "../../index.css"


export default class NavBar extends Component {
    state = {
        input: ""
    }

    submitHandler = (e) => {
        if (e.key === "Enter") {
            const inputText = e.target.value;
            this.props.getResults(inputText);
        }
    }


    render() {
        return (
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/animals">Animals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/owners">Owners</Link>
                    </li>
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Search here..."
                        onKeyDown={this.submitHandler}
                    ></input>

                </ul>
            </nav>
        )
    }
}
