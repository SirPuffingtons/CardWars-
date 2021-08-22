import {auth} from './firebase'
import {useState} from 'react'
import LoadingScreen from './_utils/LoadingScreen/LoadingScreen'
import Dashboard from './Dashboard/Dashboard'
import SignIn from './SignIn/SignIn'
import './App.css'

const App = () => {
    const [user, setUser] = useState(undefined)
    
    auth.onAuthStateChanged(() => setUser(auth.currentUser))

    return user === undefined
    ? <LoadingScreen />
    : <> {user ? <Dashboard /> : <SignIn />} </>
}

export default App