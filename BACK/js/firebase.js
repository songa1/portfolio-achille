

const configFb = {
    apiKey: "AIzaSyD88PzOGVELN58y-Al9Z41Fx83n_bryr5c",
    authDomain: "achilleblog-89376.firebaseapp.com",
    databaseURL: "https://achilleblog-89376.firebaseio.com",
    projectId: "achilleblog-89376",
    storageBucket: "achilleblog-89376.appspot.com",
    messagingSenderId: "463891056171",
    appId: "1:463891056171:web:9f139f21cecfbf3c074c6e"
}

firebase.initializeApp(configFb);
 

const db = firebase.firestore();