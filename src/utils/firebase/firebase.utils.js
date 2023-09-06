import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCWuEleItkaSj_Tcu96ZmXMgWiBNdT_OQ",
  authDomain: "crwn-clothing-708e7.firebaseapp.com",
  projectId: "crwn-clothing-708e7",
  storageBucket: "crwn-clothing-708e7.appspot.com",
  messagingSenderId: "258904573625",
  appId: "1:258904573625:web:db3400512e1da4ff777d68",
  measurementId: "G-STHMV1LDXF",
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {

  if(!userAuth) 
  {
    return;
  }

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }

  return userDocRef;
};


export const createAuthUserFromEmailAndPassword = async (email, password) => {
  if(!email || !password)
  {
    return {error : "Invalid Request"};
  }
  return await createUserWithEmailAndPassword(auth, email, password);


}