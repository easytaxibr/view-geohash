import React, { Component } from 'react';
import MapContainer from './components/MapContainer'
import { withAlert } from 'react-alert'
import Form from './components/Form'
import { stringToArray } from './Helper';
import './App.css';
class App extends Component {

  state = {
    geohashesArray: []
  }

  getGeohashArray = (geohashesString) => {
    try {
      let geohashesArray = stringToArray(geohashesString);
      this.setState({
        geohashesArray: geohashesArray,
        isFormatArray: true
      })
    } catch (error) {
      this.props.alert.show('Array format incorrect!')
    }
  }

  render() {
    return (
      <div className="row center_div">
        <div className="col-3 ">
          <Form getGeohashArray={this.getGeohashArray} />
        </div>
        <div className="col-9 static">
          <MapContainer geohashesArray={this.state.geohashesArray} />
        </div>
      </div>
    );
  }
}

export default withAlert(App)
