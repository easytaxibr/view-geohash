import { Polygon } from 'google-maps-react';
import React, { Component } from 'react';

export default class Square extends Component {

    render() {
        console.log(this.props.coords);
        return (
            <Polygon
                paths={this.props.coords}
                strokeColor="#0000FF"
                strokeOpacity={0.8}
                strokeWeight={2}
                fillColor="#0000FF"
                fillOpacity={0.35} />
        );
    }
}