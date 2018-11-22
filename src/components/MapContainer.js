import { Map, GoogleApiWrapper, Polygon } from 'google-maps-react';
import React, { Component } from 'react';
import { geohashToPolygon } from '../Helper';

export class MapContainer extends Component {

    render() {
        
        const style = {
            width: '100%',
            height: '100%'
        }

        const geohashes = this.props.geohashesArray;
        let initialCenter = {
            lat: -12.046374,
            lng: -77.042793
        }
        if (geohashes.length > 0) {
         initialCenter = {
                lat: geohashToPolygon(geohashes[0])[0].lat,
                lng: geohashToPolygon(geohashes[0])[0].lng
            }
        }
        return (
            <Map
                google={this.props.google}
                zoom={10}
                style={style}
                initialCenter={initialCenter}
                center={initialCenter}
            >
                {
                    geohashes.map(geohash => (
                        <Polygon
                            key={geohash}
                            paths={geohashToPolygon(geohash)}
                            strokeColor="#0000FF"
                            strokeOpacity={0.8}
                            strokeWeight={2}
                            fillColor="#0000FF"
                            fillOpacity={0.35} />
                    ))
                }
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCBWo3rmdNe-AYqM_A8tqo3HC952a36LAk")
})(MapContainer)