import React, { Component } from 'react';

export default class LocationList extends Component {
    render() {
        return (
            <div>
                <h3>Locations({this.props.numberOfLocations}):</h3>
                <section>
                    <h4>Nashville North</h4>
                    <p>400 Interstate Blvd North</p>
                </section>
                <section>
                    <h4>Nashville South</h4>
                    <p>500 Kennel Drive South</p>
                </section>
            </div>
        );
    }
}