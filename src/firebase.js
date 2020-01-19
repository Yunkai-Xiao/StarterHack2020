import * as firebase from 'firebase';

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

firebase.initializeApp(firebaseConfig);

export default firebase;
