import React, { Component } from 'react';

export default class OwnersList extends Component {
    render() {
        return (
            <div className="owners">
                <div className="ownerButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/owners/new")
                        }
                        }>
                        Add Owner
                    </button>
                </div>
                <h3>Owners:</h3>

                {
                    this.props.owners.map(owner =>
                        <div key={owner.id}>
                            <h4>{owner.name}</h4>
                            <p>Phone: {owner.phone}</p>
                        </div>
                    )
                }
            </div>
        );
    }
}