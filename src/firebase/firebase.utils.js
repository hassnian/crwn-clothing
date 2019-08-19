import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config={
    apiKey: "AIzaSyA0iR_JyzYTifQbMcjPC9HvLHcvYL44aCg",
    authDomain: "crow-db-app.firebaseapp.com",
    databaseURL: "https://crow-db-app.firebaseio.com",
    projectId: "crow-db-app",
    storageBucket: "",
    messagingSenderId: "112300508516",
    appId: "1:112300508516:web:537873eee0b725e2"
  };

  firebase.initializeApp(config)

 export const auth = firebase.auth()
 export const firestore = firebase.firestore()


export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth) return
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapshot = await userRef.get()

    if(!snapshot.exists) {
         const {displayName , email } = userAuth
         const createdAt = new Date();
         try{
             await userRef.set({
                 displayName,
                 email,
                 createdAt,
                 ...additionalData
             })
         }catch(err){
             console.log("ERROR CREATING USER",err)
         }
    }
    return userRef
     
}

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({propmt:"select_account"})

 export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

 export default firebase
