import firebase from 'firebase/app'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAenQHSCFmq5r336LR6t_XDC81BijrdZWI",
    authDomain: "addimage-12f6a.firebaseapp.com",
    projectId: "addimage-12f6a",
    storageBucket: "addimage-12f6a.appspot.com",
    messagingSenderId: "671608459482",
    appId: "1:671608459482:web:e0bab19fbf21c9924895e3",
    measurementId: "G-V096DMTZV0"
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const storage = firebase.storage()
 export {storage, firebase as default}