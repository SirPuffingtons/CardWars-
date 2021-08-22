import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider, signInWithPopup, updateProfile} from 'firebase/auth'
import {doc, getFirestore, onSnapshot, setDoc} from 'firebase/firestore'

initializeApp({
    apiKey: 'AIzaSyBRhhYy8mG8ihJjbdcNvn4CDArbiuc6iCw',
    authDomain: 'cardwars-222cf.firebaseapp.com',
    projectId: 'cardwars-222cf',
    storageBucket: 'cardwars-222cf.appspot.com',
    messagingSenderId: '194926696469',
    appId: '1:194926696469:web:a214dde6c043dce4a1561c'
})

const auth = getAuth()
const db = getFirestore()

export {auth, db, doc, GoogleAuthProvider, onSnapshot, setDoc, signInWithPopup, updateProfile}