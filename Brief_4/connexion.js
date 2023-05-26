
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
 import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {

    apiKey: "AIzaSyAw5n1MF8kJtHdQJfA8zfUtlP38tTAbMfk",
  
    authDomain: "mindgeek-292bd.firebaseapp.com",
  
    databaseURL: "https://mindgeek-292bd-default-rtdb.europe-west1.firebasedatabase.app",
  
    projectId: "mindgeek-292bd",
  
    storageBucket: "mindgeek-292bd.appspot.com",
  
    messagingSenderId: "1017837236790",
  
    appId: "1:1017837236790:web:452769bee3bcd445205e97",
  
    measurementId: "G-2Q3Z0V8ZGY"
  
  };
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const auth = getAuth();

 document.getElementById('formu').addEventListener('submit', function(event) {
     event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire

     const email = document.getElementById('email').value;
     const password = document.getElementById('mdp').value;

     signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
             // Connexion réussie
             const user = userCredential.user;
             console.log('Utilisateur connecté:', user);
             // Vous pouvez rediriger l'utilisateur vers une autre page ici, afficher un message de bienvenue, etc.
         })
         .catch((error) => {
             // Une erreur s'est produite lors de la connexion
             const errorCode = error.code;
             const errorMessage = error.message;
             console.error('Erreur de connexion:', errorCode, errorMessage);
             // Vous pouvez afficher un message d'erreur à l'utilisateur ici
         });
 });