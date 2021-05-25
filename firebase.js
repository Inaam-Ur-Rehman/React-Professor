import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAJ2a521HQb7Fyfb5sxg-26ZOlFUIrUXfQ",
    authDomain: "professor-536c8.firebaseapp.com",
    projectId: "professor-536c8",
    storageBucket: "professor-536c8.appspot.com",
    messagingSenderId: "437022559486",
    appId: "1:437022559486:web:52924d27e3d527576769af"
};
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};
