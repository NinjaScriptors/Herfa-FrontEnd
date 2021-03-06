import firebase from 'firebase/app';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkMBP0M7FA0dwrJm4APhXmc-fyjGbI-qo",
    authDomain: "herfa-31766.firebaseapp.com",
    projectId: "herfa-31766",
    storageBucket: "herfa-31766.appspot.com",
    messagingSenderId: "708780667398",
    appId: "1:708780667398:web:1e03b612c258186d2a0987",
    measurementId: "G-N3YRFS6ZG2"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {storage, firebase as default};