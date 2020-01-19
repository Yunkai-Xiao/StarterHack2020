import React, {Fragment} from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  Circle
} from "react-google-maps";

const Map = props => {
  
  var totalList = [];
  for (var i = 0; i < props.markerLocX.length; i++){
    totalList.push([props.markerLocX[i], props.markerLocY[i]]);
  }
  return (
    <GoogleMap
      defaultZoom={props.zoom}
      defaultCenter={{lat:43.4713714, lng:-80.5438478}}
    >
    
      {totalList.map(coordPair => {
        return (
          <Fragment key={Math.random() * 100000000}>
            <Marker
              position={{
                lat: parseFloat(coordPair[0]),
                lng: parseFloat(coordPair[1])
              }}
            />
            <Circle
              defaultCenter={{
                lat: parseFloat(coordPair[0]),
                lng: parseFloat(coordPair[1])
              }}
              radius={50}
              options={{strokeColor: "#ff0000"}}
            />
          </Fragment>
        );
      })}
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(Map));