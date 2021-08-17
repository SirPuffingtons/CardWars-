import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import './SignIn.css'

    const SignIn = ({auth}) => {

    const connect = () => signInWithPopup(auth, new GoogleAuthProvider())

    return (
    <main id='LoginForm'>
        <header>
            <div>CARD</div>
            <div><span>W</span>ARS</div>
        </header>
        <button onClick={connect}>Sign in with Google</button>
    </main>
    )

}

export default SignIn