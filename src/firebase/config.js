import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyARDrdEB_XCbkZqiitGoB_KP8LEg6x1SwY",
    authDomain: "recipe-directory-site-564c1.firebaseapp.com",
    projectId: "recipe-directory-site-564c1",
    storageBucket: "recipe-directory-site-564c1.appspot.com",
    messagingSenderId: "516315020053",
    appId: "1:516315020053:web:73c47937fafe9a445b871c"
  };

  // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }
