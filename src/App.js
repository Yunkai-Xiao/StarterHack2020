import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './containers/MapContainer';
import LeftSearchBar from './components/LeftSearchBar';
import firebase from './firebase';

// CSS
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';
// import 'https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js';
// import 'https://www.gstatic.com/firebasejs/7.7.0/firebase-analytics.js';
// import 'https://www.gstatic.com/firebasejs/7.7.0/firebase-auth.js';
// import 'https://www.gstatic.com/firebasejs/7.7.0/firebase-database.js';

class App extends Component {
  state = {
    qualifiedPostLocationX : [],
    qualifiedPostLocationY : [],
    searchCourse : "",
    posts : {}
  }

  async componentWillMount(){
    if (this.state.searchCourse !== ""){
      var myPosts = null;
      const ref = await firebase.database().ref().child('/Users').on('value', async function(snap){
        myPosts = await snap.val();
      })
      await this.setState({ posts : myPosts});
    }
  }

  searchCourse = async value => {
    this.setState({searchCourse : value});
  }

  render() {
    const qualifiedPostLocationX = [];
    const qualifiedPostLocationY = [];
    console.log(this.state.posts);
    console.log(this.state.searchCourse);
    for (var i = 0; i < Object.keys(this.state.posts).length; ++i){
          var cur = this.state.posts[Object.keys(this.state.posts)[i]];
          var keys = Object.keys(cur);
          for (var j = 0 ; j < keys.length; j++){
            var str = cur[keys[j]];
            if (typeof str == "string" && str.includes(this.state.searchCourse)){
              qualifiedPostLocationX.push(cur['x']);
              qualifiedPostLocationY.push(cur['y']);
            }
          }
    };
    console.log(qualifiedPostLocationX);
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <div>
          <LeftSearchBar 
            onSearchClick={this.searchCourse}
          />
          <Map
            center={{ lat: 40.64, lng: -73.96 }}
            zoom={12}
            markerLocX={qualifiedPostLocationX}
            markerLocY={qualifiedPostLocationY}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBrR5fLDg5k8V4lK9XpxIUnRrhzBrcuoPQ"
            loadingElement={<div style={{ height: '100%'}} />}
            containerElement={<div style={{ height: '800px' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
