import React, {Fragment} from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  Circle
} from "react-google-maps";

const Map = props => {
  console.log(props.markerLocX);
  console.log(props.markerLocY);
  // props.markerLoc.map(coordPair => {
  //   console.log(1);});
  // console.log(props.markerLoc);
  return (
    <GoogleMap
      defaultZoom={props.zoom}
      defaultCenter={{lat:1, lng:1}}
    >
    <Marker
              position={{
                lat: parseFloat(1),
                lng: parseFloat(1)
              }}
            />
      {/* {props.markerLoc.map(coordPair => {
        console.log(1);
        return (
          <Fragment>
            <Marker
              position={{
                lat: parseFloat(1),
                lng: parseFloat(1)
              }}
            />
            <Circle
              defaultCenter={{
                lat: parseFloat(1),
                lng: parseFloat(1)
              }}
              radius={3000}
              options={{strokeColor: "#ff0000"}}
            />
          </Fragment>
        );
      })} */}
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(Map));