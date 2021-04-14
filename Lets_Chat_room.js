var firebaseConfig = {
    apiKey: "AIzaSyDeEAJCZrEVcHtF0nRUvWUaLMqa-5Ej3hM",
    authDomain: "lets-chat-web-app-24821.firebaseapp.com",
    projectId: "lets-chat-web-app-24821",
    storageBucket: "lets-chat-web-app-24821.appspot.com",
    messagingSenderId: "242470398526",
    appId: "1:242470398526:web:661e80ad1a126309bfbf6f",
    measurementId: "G-77MBC9GGFC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

       document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
 
      function addRoom() {

            room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(user_name).update(
                  {
                  purpose:"adding user"
                }
           );
           
            localStorage.setItem("room_name" , room_name);
            window.location = "kwitter_page.html";
      }
      function getData() {

            firebase.database().ref("/").on('value', function (snapshot ) {
            document.getElementById("output").innerHTML;
            Room_names = childKey;
            console.log("room name-" + Room_names);
            row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
            document.getElementById("output").innerHTML +=row;
            } 
            );
      }
      getData();

      function redirectToRoomName(name) {

            console.log(name);
            localStorage.setItem("room_name" , name);
            window.location = "Lets_Chat_page.html";
      }
