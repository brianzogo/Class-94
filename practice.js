
// ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
  
    apiKey: "AIzaSyD0MumP0mf90NRIT453ydSagW8E4hROy5s",
    authDomain: "kwitter-website-ee0a0.firebaseapp.com",
    databaseURL: "https://kwitter-website-ee0a0-default-rtdb.firebaseio.com",
    projectId: "kwitter-website-ee0a0",
    storageBucket: "kwitter-website-ee0a0.appspot.com",
    messagingSenderId: "772067921455",
    appId: "1:772067921455:web:21c17684a697d9784e00da"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
  
  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
    });
  }
  
  
  
  