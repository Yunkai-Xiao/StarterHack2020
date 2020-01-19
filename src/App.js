import React, { Component } from 'react';
import logo from './logo.svg';
import MapContainer from './containers/MapContainer';
import LeftSearchBar from './components/LeftSearchBar';

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
      qualifiedPostLocationY : []
    }
  }

  searchCourse = async value => {
    const firebase = require("firebase/app");
    require("firebase/database");
    require("firebase/auth");
    const firebaseConfig = {
      apiKey: "AIzaSyBRnpOBfaFHL5NkbtedViT7lGswAgVWJxM",
      authDomain: "studymate-80d37.firebaseapp.com",
      databaseURL: "https://studymate-80d37.firebaseio.com",
      projectId: "studymate-80d37",
      storageBucket: "studymate-80d37.appspot.com",
      messagingSenderId: "328318671355",
      appId: "1:328318671355:web:457a879ae2d0f27b1e935e",
      measurementId: "G-HRFR7MYWY8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    if (value != null){
      var posts = null;
      var states = this.state;
      const ref = firebase.database().ref().child('/Users').on('value', function(snap){
        posts = snap.val();
        for (var i = 0; i < Object.keys(posts).length; ++i){
          var cur = posts[Object.keys(posts)[i]];
          var keys = Object.keys(cur);
          for (var j = 0 ; j < keys.length; j++){
            var str = cur[keys[j]];
            if (typeof str == "string" && str.includes(value)){
              states.qualifiedPostLocationX.push(cur['x']);
              states.qualifiedPostLocationY.push(cur['y']);
            }
          }
        };
    })
    this.state = states;
    console.log(this.state.qualifiedPostLocationX);
    console.log(this.state.qualifiedPostLocationY);
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <div>
          <LeftSearchBar 
            onSearchClick={this.searchCourse}
          />
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default App;
