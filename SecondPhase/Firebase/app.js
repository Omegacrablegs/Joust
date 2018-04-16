(function(){


    const config = {
      apiKey: "AIzaSyDYoo1Aq-XSfHHtV_-PdJImtcw2cdm-GDU",
      authDomain: "joust-50b62.firebaseapp.com",
      databaseURL: "https://joust-50b62.firebaseio.com",
      projectId: "joust-50b62",
      storageBucket: "joust-50b62.appspot.com",

    };
    firebase.initializeApp(config);

}());

  // Get Elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  // addig a login
  btnLogin.addEventListener('click', e =>{
      // Get email and password
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(email, pass)

      promise.catch(e => console.log(e.message));
  });

      // Add a signup event
      btnSignUp.addEventListener('click', e=> {

        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, pass)

        promise.catch(e => console.log(e.message));
      });


      btnLogout.addEventListener('click', e=>{
        firebase.auth().signOut();
      })



      firebase.auth().onAuthStateChanged(firebaseUser => {
          if(firebaseUser){
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
          }

          else{
            console.log("not Logged in");
            btnLogout.classList.remove('hide');
          }

      });

//}();
