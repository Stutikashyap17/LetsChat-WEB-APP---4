var firebaseConfig = {
      apiKey: "AIzaSyABGUZqCCcrN5CNl6EFXoXoL_N-iQ5UU1w",
      authDomain: "lets-chat-web-app-4.firebaseapp.com",
      projectId: "lets-chat-web-app-4",
      storageBucket: "lets-chat-web-app-4.appspot.com",
      messagingSenderId: "168976048716",
      appId: "1:168976048716:web:37e8d1fc9147369285cae9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");

   room_name = localStorage.getItem("room_name");

   function send() {

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push( {
      
            name : user_name, message : msg,like:0
      });
      document.getElementById("msg").value = "";
      }

     function getData() { 
      firebase.database().ref("/" + room_name).on('value',
       function(snapshot) { document.getElementById("output").innerHTML = ""; 
       snapshot.forEach(
      function(childSnapshot) { 
       childKey  = childSnapshot.key; 
       childData = childSnapshot.val(); 
       if(childKey != "purpose") {
         firebase_message_id = childKey;
          message_data = childData;
//Start code

//End code
      } });  }); }
getData();

