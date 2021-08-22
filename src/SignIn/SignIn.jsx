import {auth, GoogleAuthProvider, signInWithPopup} from '../firebase'
import './SignIn.css'

const SignIn = () => {
    const connect = () => signInWithPopup(auth, new GoogleAuthProvider()).catch(()=>{})

    return (
    <main className='signIn'>
        <header>
            <div>CARD</div>
            <div>WARS</div>
        </header>
        <button onClick={connect}>Play Now</button>
    </main>
    )
}

export default SignIn