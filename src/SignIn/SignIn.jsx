import {useState} from 'react'
import {auth, GoogleAuthProvider, signInWithPopup} from '../firebase'
import LoadingScreen from '../_utils/LoadingScreen/LoadingScreen'
import './SignIn.css'

const SignIn = () => {
    const [loading, setLoading] = useState()

    const connect = () => {
        setLoading(true)

        signInWithPopup(auth, new GoogleAuthProvider()).catch(() => setLoading(false))
    }

    return loading
    ? <LoadingScreen />
    : <main className='signIn'>
        <header>
            <div>CARD</div>
            <div>WARS</div>
        </header>
        <button onClick={connect}>Play Now</button>
    </main>
}

export default SignIn