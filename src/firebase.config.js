import {getApp, getApps, initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAjXOlvHIifiWa4SvjDbJyA9yCXTrn-LGY",
    authDomain: "restaurantapp-e98eb.firebaseapp.com",
    databaseURL: "https://restaurantapp-e98eb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "restaurantapp-e98eb",
    storageBucket: "restaurantapp-e98eb.appspot.com",
    messagingSenderId: "897242803903",
    appId: "1:897242803903:web:bc7e0d2c3fbae19e6a600a"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore  = getFirestore(app);
  const storage = getStorage(app);


  export {app, firestore, storage };