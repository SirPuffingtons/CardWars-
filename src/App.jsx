import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'
import Dashboard from './Dashboard/Dashboard'
import SignIn from './SignIn/SignIn'
import './App.css'

initializeApp({
    apiKey: 'AIzaSyBRhhYy8mG8ihJjbdcNvn4CDArbiuc6iCw',
    authDomain: 'cardwars-222cf.firebaseapp.com',
    projectId: 'cardwars-222cf',
    storageBucket: 'cardwars-222cf.appspot.com',
    messagingSenderId: '194926696469',
    appId: '1:194926696469:web:a214dde6c043dce4a1561c'
})

const App = () => {
    const auth = getAuth()

    const [user] = useAuthState(auth)

    return <>
        {user
            ? <Dashboard auth={auth} />
            : <SignIn auth={auth} />
        }
    </>
}

export default App