import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET
};

app.initializeApp(config);

export const auth = app.auth();
export const firestore = app.firestore();

const provider = new app.auth.GoogleAuthProvider();
//
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData)=>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const {displayName,email} = userAuth;
    try {
      await userRef.set({
        displayName,
        email,
        ...additionalData
      })
    } catch (error) {
      console.log(error)
    }
  }
  return userRef;
} 

export default app;
