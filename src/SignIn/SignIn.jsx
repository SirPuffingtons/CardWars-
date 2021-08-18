import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import './SignIn.css'

const SignIn = ({auth}) => {

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