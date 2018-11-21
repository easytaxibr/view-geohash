import React, { Component } from 'react';
import MapContainer from './components/MapContainer'
import Form from './components/Form'
import { stringToArray } from './Helper';
import './App.css';

class App extends Component {

  state = {
    geohashesArray: [],
    isFormatArray: ''
  }

  getGeohashArray = (geohashesString) => {
    try {
      let geohashesArray = stringToArray(geohashesString);
      this.setState({
        geohashesArray: geohashesArray,
        isFormatArray: true
      })
    } catch (error) {
      this.setState({
        isFormatArray: false
      });
      console.log('No tiene el formato definido');
    }
  }

  showError = () => {
    if (this.state.isFormatArray) {
      return (
        <div className="alert alert-danger" role="alert">
          <p>The format is not correct</p>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="row center_div">
        <div className="col-3 ">
          {this.showError()}
          <Form getGeohashArray={this.getGeohashArray} />
        </div>
        <div className="col-9 static">
          <MapContainer geohashesArray={this.state.geohashesArray} />
        </div>
      </div>
    );
  }
}

export default App;
