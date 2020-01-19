import React, { Component } from 'react';
import Map from './containers/MapContainer';
import LeftSearchBar from './components/LeftSearchBar';
import firebase from './firebase';
import SearchForm from './components/SearchForm';

// CSS
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';
// import 'https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js';
// import 'https://www.gstatic.com/firebasejs/7.7.0/firebase-analytics.js';
// import 'https://www.gstatic.com/firebasejs/7.7.0/firebase-auth.js';
// import 'https://www.gstatic.com/firebasejs/7.7.0/firebase-database.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qualifiedPostLocationX : [],
      qualifiedPostLocationY : [],
      searchCourse : "CS",
      posts : {},
      postIsOpen : true,
      fieldsOccupied: false,
      isEditingPost: true, 
      postLng: 15,
      postLat: 15
    }
  }

  async componentWillMount(){
    console.log("12");
    if (this.state.searchCourse !== ""){
      var myPosts = null;
      const ref = await firebase.database().ref().child('/Users').on('value', async function(snap){
        myPosts = await snap.val();
      })
        this.setState({ posts : myPosts, searchCourse: "CS"});
    }
  }

  searchCourse = async value => {
    this.state.searchCourse = "CS";
    this.componentWillMount();
    
  }

  cancelReviewHandler = () => {
    this.setState({ 
      "postIsOpen": false,
      "fieldsOccupied": false
    });
  }

  latChangeHandler = async (value) => {
    await this.setState({
      postLng: value,
      postLat: this.state.postLng
    });
  }

  lngChangeHandler = async (value) => {
    await this.setState({
      postLng: value,
      postLat: this.state.postLat
    });
  }

  acceptReviewHandler = async () => {
    firebase.database().ref('/Users/xyk').set({
      username: 'shawnhan',
      program: 'CS',
      review: 'satisfactory',
      x: this.state.postLat,
      y: this.state.postLng
    });

    await this.setState({ 
      "postIsOpen": false,
      "fieldsOccupied": false
    })
  }
  render() {
    const qualifiedPostLocationX = [];
    const qualifiedPostLocationY = [];
    var myPosts;
    const ref =  firebase.database().ref().child('/Users').on('value', function(snap){
      myPosts = snap.val();

    for (var i = 0; i < Object.keys(myPosts).length; ++i){
          var cur = myPosts[Object.keys(myPosts)[i]];
          var keys = Object.keys(cur);
          for (var j = 0 ; j < keys.length; j++){
            var str = cur[keys[j]];
            if (typeof str == "string" && str.includes("CS")){
              qualifiedPostLocationX.push(cur['x']);
              qualifiedPostLocationY.push(cur['y']);
            }
          }
    };    
  })
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <div>
          <LeftSearchBar 
            onSearchClick={this.searchCourse}
          />
          <SearchForm
          cancelReviewHandler={this.cancelReviewHandler}
          acceptReviewHandler={this.acceptReviewHandler}
          lngChangeHandler = {this.lngChangeHandler}
          latChangeHandler = {this.latChangeHandler}
          postEditing={this.state.postIsOpen}        
        />
          <Map
            center={{ lat: 40.64, lng: -73.96 }}
            zoom={18}
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
