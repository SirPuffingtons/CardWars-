import * as fb from './firebase'
import {createContext, useState} from 'react'
import Dashboard from './Dashboard/Dashboard'
import SignIn from './SignIn/SignIn'
import './App.css'

const FirebaseContext = createContext()

const App = () => {
    const [user, setUser] = useState(fb.auth.currentUser)
    fb.auth.onAuthStateChanged(() => setUser(fb.auth.currentUser))

    return <>
    
        {user
            ? <FirebaseContext.Provider value={{fb}}>
                <Dashboard />
              </FirebaseContext.Provider>

            : <SignIn auth={fb.auth} />
        }

    </>
}

export {FirebaseContext, App}