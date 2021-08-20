import {initializeApp} from 'firebase/app'
import {getAuth, updateProfile} from 'firebase/auth'
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
const database = getFirestore()

const generateDisplayName = () => {
    const words =  ['Potato', 'Shark', 'Hunter', 'Collector', 'CardMaster', 'Wolf', 'Mystery', 'Doggo', 'Alpaca', 'Lizard', 'Wizard', 'Overlord', 'Tomato']

    return words[Math.round(Math.random() * (words.length-1))] + `${Math.round(Math.random() * 10000)}`
}

const userSchema = {
    cards: [{name: 'Estrielle De Vaux'}],
    coins: 0
}

export {
    auth,
    database,
    generateDisplayName,
    doc,
    onSnapshot,
    setDoc,
    updateProfile,
    userSchema
}