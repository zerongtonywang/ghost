import firebase from "firebase";
// import firestore from "firebase/firestore";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export { firebase as firebaseInstance };
export const db = firebase.firestore();
