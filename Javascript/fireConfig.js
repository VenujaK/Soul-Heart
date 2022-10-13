const firebaseConfig = {
    apiKey: "AIzaSyDcn4diUQ6Y3vjsaDbBJgPtqnRUBRSW5JE",
    authDomain: "soul-heart.firebaseapp.com",
    databaseURL: "https://soul-heart-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "soul-heart",
    storageBucket: "soul-heart.appspot.com",
    messagingSenderId: "972358294383",
    appId: "1:972358294383:web:7d5158f72a386ad155a69a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// var firebaseRef = firebase.database().ref("VidDetails");
// firebaseRef.once("value", function(snapshot) {
//     var data = snapshot.val();
//     for (let i in data) {
//         console.log(data[i]);
//     }
// })