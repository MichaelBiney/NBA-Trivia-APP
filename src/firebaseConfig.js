// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCp98v_0jaaJvxA45e1vpGj87ZKpAudSKo",
  authDomain: "nessa-765b7.firebaseapp.com",
  projectId: "nessa-765b7",
  storageBucket: "nessa-765b7.appspot.com",
  messagingSenderId: "970340544684",
  appId: "1:970340544684:web:6b7165a877eef854e52f09",
  measurementId: "G-18QRY1NS3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
