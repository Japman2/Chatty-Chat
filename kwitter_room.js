
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC50nomhoONz98YvAXEqtvqPpKzUyNM_Ys",
      authDomain: "kwitter-f710d.firebaseapp.com",
      databaseURL: "https://kwitter-f710d-default-rtdb.firebaseio.com",
      projectId: "kwitter-f710d",
      storageBucket: "kwitter-f710d.appspot.com",
      messagingSenderId: "975730232088",
      appId: "1:975730232088:web:d7d9baf736b04fb3346c6d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
