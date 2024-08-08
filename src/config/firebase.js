import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBsY60_q8TLOb3R5bytVo0NwF87XvL3HBU",
  authDomain: "otero-entregafinal-firebase.firebaseapp.com",
  projectId: "otero-entregafinal-firebase",
  storageBucket: "otero-entregafinal-firebase.appspot.com",
  messagingSenderId: "674221990771",
  appId: "1:674221990771:web:f935e1e7a23aeb6a2c1b06",
  measurementId: "G-3YJV3DXBYB"
  };

//ARRIBA info para que el cliente se conecte, setea configuración


  firebase.initializeApp(firebaseConfig);

 

export default firebase