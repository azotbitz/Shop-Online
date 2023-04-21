import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC8zBixUGCTktwnFsMuL8a_CSa3pTcQOgU",
    authDomain: "my-online-shop1.firebaseapp.com",
    databaseURL: "https://my-online-shop1-default-rtdb.firebaseio.com",
    projectId: "my-online-shop1",
    storageBucket: "my-online-shop1.appspot.com",
    messagingSenderId: "795262787456",
    appId: "1:795262787456:web:550eceaa3e99c2b8cc2b65"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

export const db = firebaseDB.database().ref();
export const auth = firebase.auth();