import React, { Component } from 'react';

export default class Form extends Component {

    geohashArray = React.createRef();

    sendGeohashes = (e) => {
        e.preventDefault();
        this.props.getGeohashArray(this.geohashArray.current.value);
    }
    
    render() {
        return (
            <form onSubmit={this.sendGeohashes}>
                <button type="submit" className="btn btn-primary btn-lg btn-block">Draw geoHashes</button>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Introducte heohash array | <strong> eg. ["aaeet", "bbbbg"] </strong> </label>
                    <textarea ref={this.geohashArray} className="form-control" id="exampleFormControlTextarea1" rows="35"></textarea>
                </div>
            </form>
        );
    }
}