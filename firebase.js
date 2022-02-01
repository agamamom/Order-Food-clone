import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAUeafxtDTZ-CUyjuGJBhWpoh7Ty5jodtw",
    authDomain: "test-order-food-project.firebaseapp.com",
    projectId: "test-order-food-project",
    storageBucket: "test-order-food-project.appspot.com",
    messagingSenderId: "383744268317",
    appId: "1:383744268317:web:95f40e0cafe1c696f10ef4"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };