import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
};

app.initializeApp(config);

export const auth = app.auth();
export const firestore = app.firestore();

const provider = new app.auth.GoogleAuthProvider();
const facebookProvider = new app.auth.FacebookAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    try {
      await userRef.set({
        displayName,
        email,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

export const updateCart = async (uid, cart) => {
  const cartRef = firestore.doc(`users/${uid}/cart/data`);
  const cartSnapShot = await cartRef.get();
  const data = cartSnapShot.data().items;
  // console.log(Object.keys(cartSnapShot.data()).length);
  try {
    if (!Object.keys(cartSnapShot.data()).length) {  //initial state
      await cartRef.set({
        items: [cart],
      });
    }else{
      const existing = data.find((item) => item.id === cart.id);
      if(existing){   // if exists updating the quantity
        const index = data.findIndex(
          (item) => item.id === cart.id
        )
        const updatedCartItems = [...data]; //making a new array
        updatedCartItems[index].quantity = updatedCartItems[index].quantity + cart.quantity;
        console.log(index)
        await cartRef.set({
          items: updatedCartItems,
        });
      }else{         // if not exists adding item
        const newData = data;
        newData.push(cart)
        await cartRef.set({
          items: newData,
        });
      }      
    }
  } catch (error) {
    console.log(error);
  }
};

export const addCartItemQuantity = async(uid,payload)=>{
  const cartRef = firestore.doc(`users/${uid}/cart/data`);
  const cartSnapShot = await cartRef.get();
  const data = cartSnapShot.data().items;
  try {
    const existing = data.find((item) => item.id === payload.id);
    if(existing){
      const index = data.findIndex(
        (item) => item.id === payload.id
      )
      const updatedCartItems = [...data]; //making a new array
      updatedCartItems[index].quantity = payload.quantity ;
      await cartRef.set({
        items: updatedCartItems,
      });
    }else{
      console.log("else")
      return ;
    }
  } catch (error) {
    console.log(error)
  }
}
export const reduceCartItemQuantity = async(uid,payload)=>{
  const cartRef = firestore.doc(`users/${uid}/cart/data`);
  const cartSnapShot = await cartRef.get();
  const data = cartSnapShot.data().items;
  try {
    const existing = data.find((item) => item.id === payload.id);
    if(existing){
      const index = data.findIndex(
        (item) => item.id === payload.id
      )
      const updatedCartItems = [...data]; //making a new array
      if(payload.quantity>=1){
        updatedCartItems[index].quantity = payload.quantity ;
        await cartRef.set({
          items: updatedCartItems,
        });
      }else{
        updatedCartItems.splice(index, 1);
        await cartRef.set({
          items: updatedCartItems,
        });
      }

    }else{
      console.log("else")
      return ;
    }
  } catch (error) {
    console.log(error)
  }
}

export const deleteCartItems = async (uid)=>{
  const cartRef = firestore.doc(`users/${uid}/cart/data`);
  try {
    await cartRef.set({
      items: [],
    });
  } catch (error) {
    console.log(error)
  }
}

export const getCartData = async (uid) => {
  const cartRef = firestore.doc(`users/${uid}/cart/data`);
  const cartSnapShot = await cartRef.get();
  const data = cartSnapShot.data();
  return(data)
};

export default app;
