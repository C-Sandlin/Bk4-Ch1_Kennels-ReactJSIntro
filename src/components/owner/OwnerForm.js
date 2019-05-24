import React, { Component } from "react";
import "../animal/animal.css";



export default class AnimalForm extends Component {
    // Set initial state
    state = {
        name: "",
        phone: "",
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewOwner = evt => {

        const owner = {
            name: this.state.name,
            phone: this.state.phone
        };

        // Create the animal and redirect user to animal list
        this.props.addOwner(owner)

    };

    render() {
        return (
            <React.Fragment>
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="name">Owner name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="phone"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="phone"
                            placeholder="Phone"
                        />
                    </div>


                    <button
                        type="button"
                        onClick={this.constructNewOwner}
                        className="btn btn-primary"
                    >
                        Submit
                     </button>
                </form>
            </React.Fragment>
        );
    }
}

// export default withRouter(AnimalForm)