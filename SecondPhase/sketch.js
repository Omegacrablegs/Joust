window.onload = function(){
var database;





  console.log('ran');
  var config = {
      apiKey: "AIzaSyDYoo1Aq-XSfHHtV_-PdJImtcw2cdm-GDU",
      authDomain: "joust-50b62.firebaseapp.com",
      databaseURL: "https://joust-50b62.firebaseio.com",
      projectId: "joust-50b62",
      storageBucket: "joust-50b62.appspot.com",
      messagingSenderId: "191760874787"

    };
  firebase.initializeApp(config);
  database = firebase.database();


var ref = database.ref('Leaderboard');

ref.on('value', gotData, errData);


//}

function gotData(data){

//  Will get object
//  console.log(data.val());


//Gets Array
  var Leaderboard = data.val();
  var keys = Object.keys(Leaderboard);
//  console.log(keys);
// loop to access array
  for(var i =0; i <keys.length; i++)
  {

      var k = keys[i];
      var name = Leaderboard[k].name;
      var steps = Leaderboard[k].steps;

      //var lastname = Jousters[k].lastname;
    //  var location = Jousters[k].location;
  //    var age = Jousters[k].age;


      //  console.log(age,firstname);

      //place the info into the table










        $("#table_body").append("<tr><td>" + name + "</td><td>" + steps);























  }









}




function errData(err){

  console.log('Error');
  console.log(err);
}
}
