import * as firebase from 'firebase/app';
import "firebase/firestore";

firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
});

var db = firebase.firestore();

export default db;