import * as f from './firebase'
import {createContext, useState} from 'react'
import Dashboard from './Dashboard/Dashboard'
import SignIn from './SignIn/SignIn'
import './App.css'

const FirebaseContext = createContext()

const App = () => {
    const [user, setUser] = useState(f.auth.currentUser)
    f.auth.onAuthStateChanged(() => setUser(f.auth.currentUser))

    return <>
    
        {user
            ? <FirebaseContext.Provider value={{f}}>
                <Dashboard />
              </FirebaseContext.Provider>

            : <SignIn auth={f.auth} />
        }

    </>
}

export {FirebaseContext, App}