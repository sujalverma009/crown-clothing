import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {

  apiKey: "AIzaSyA0jijHPRfuaKOzwdX1Dg6xSPT93Mv4DHQ",
  authDomain: "crwn-db-f343c.firebaseapp.com",
  projectId: "crwn-db-f343c",
  storageBucket: "crwn-db-f343c.appspot.com",
  messagingSenderId: "788400979459",
  appId: "1:788400979459:web:ce8db071863a14fbe5d836",
  measurementId: "G-45QYZSJPVJ"
  
};
export const createUserProfileDocument = async (userAuth,additionalData) =>{
  if(!userAuth) return;

  const userRef=firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if(!snapShot.exists){
     const {displayName,email}=userAuth;
     const createdAt=new Date();
     try{
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
       })
     }
     catch(error){
       console.log('error creating user',error.message);
     }

  }
  return userRef;
};











firebase.initializeApp(config);

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = firestore.doc(`users/${userAuth.uid}`);

//   const snapShot = await userRef.get();

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData
//       });
//     } catch (error) {
//       console.log('error creating user', error.message);
//     }
//   }

//   return userRef;
// };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
