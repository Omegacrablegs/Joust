var config = {
    apiKey: "AIzaSyDYoo1Aq-XSfHHtV_-PdJImtcw2cdm-GDU",
    authDomain: "joust-50b62.firebaseapp.com",
    databaseURL: "https://joust-50b62.firebaseio.com",
    projectId: "joust-50b62",
    storageBucket: "joust-50b62.appspot.com",
    messagingSenderId: "191760874787"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('leaderboard');

leaderboard(rank, name, steps);

function writeUserData(rank, name, steps) {
  firebase.database().ref().child('NewJ').child('leaderboard').set({
    var newMessageRef = messagesRef.push();
    rank: rank,
    name: name,
    steps : steps
  });
}
