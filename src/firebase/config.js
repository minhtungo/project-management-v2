import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDPNxCTHDJ5y-4ocdCI6uTHhJwmbt6zjvQ',
  authDomain: 'project-management-app-244e0.firebaseapp.com',
  projectId: 'project-management-app-244e0',
  storageBucket: 'project-management-app-244e0.appspot.com',
  messagingSenderId: '505891908422',
  appId: '1:505891908422:web:f8ddec14d0a5338479d347',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
