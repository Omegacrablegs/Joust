var config = {
  apiKey: "AIzaSyDYoo1Aq-XSfHHtV_-PdJImtcw2cdm-GDU",
  authDomain: "joust-50b62.firebaseapp.com",
  databaseURL: "https://joust-50b62.firebaseio.com",
  projectId: "joust-50b62",
  storageBucket: "joust-50b62.appspot.com",
  messagingSenderId: "191760874787"
};
firebase.initializeApp(config);


var messagesRef = firebase.database().ref('Leaderboard');
// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var steps = getInputVal('steps');


  // Save message
  saveMessage(name, steps);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, steps){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name:name,
    steps:steps
  });
}
