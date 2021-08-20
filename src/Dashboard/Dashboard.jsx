import {FirebaseContext} from '../App'
import {useContext, useEffect, useState} from 'react'
import Dismissible from './Dismissible/Dismissible'
import Collapsible from './Collapsible/Collapsible'
import CardButton from './Collapsible/CardButton/CardButton'
import './Dashboard.css'

const Dashboard = () => {
    const {fb} = useContext(FirebaseContext)

    const [databaseUser, setDatabaseUser] = useState()
    const [displayName, setDisplayName] = useState(fb.auth.currentUser.displayName)

    useEffect(() => {
        const ref = fb.doc(fb.database, 'users', fb.auth.currentUser?.uid)

        fb.onSnapshot(ref, user => {
            if(user.exists()) {setDatabaseUser(user.data())}

            else fb.setDoc(ref, fb.userSchema)
            .then(res => {
                setDatabaseUser(res.data())
                console.log(databaseUser)

                fb.updateProfile(fb.auth.currentUser, {displayName: fb.displayNameGen()})
                .then(() => setDisplayName(fb.auth.currentUser.displayName))
            })
        })
    }, [])

    const [tab, setTab] = useState(1)

    return (
    <main className='dashboard'>
        <nav>
            <button onClick={() => setTab(1)} className={tab === 1 ? 'active' : undefined}>Home</button>
            <button onClick={() => setTab(2)} className={tab === 2 ? 'active' : undefined}>Battle</button>
            <button onClick={() => setTab(3)} className={tab === 3 ? 'active' : undefined}>Trade</button>
        </nav>

        <section className={tab === 1 ? undefined : "hidden"}>
            <Dismissible
                title="HOME"
                message={`Welcome to your home page, ${displayName}!`}
            />

            <Collapsible title="MY CARDS" cards>
                {databaseUser?.cards?.map(card => <CardButton key={card.name} _id={card.name} />)}
                {/* For each card in the account, spawn a CardButton component. A CardButton, when clicked, will spawn a modal window that displays the full Card element.*/}
            </Collapsible>

            <Collapsible title="MY STATS" collapsed />

            <Collapsible title='OPTIONS'>
                <div className="cols2">
                <button onClick={() => fb.updateProfile(fb.auth.currentUser, {displayName: fb.displayNameGen()}).then(() => setDisplayName(fb.auth.currentUser.displayName))}>Edit Profile</button>
                <button onClick={() => fb.auth.signOut()}>Sign Out</button>
                </div>
            </Collapsible>
        </section>

        <section className={tab === 2 ? undefined : "hidden"}>
            <Dismissible
                title="BATTLE"
                message="Play solo or online against other players."
            />

            <Collapsible title="SOLO" collapsed>
            </Collapsible>

            <Collapsible title="ONLINE" collapsed>
            </Collapsible>
        </section>

        <section className={tab === 3 ? undefined : "hidden"}>
            <Dismissible
                title="TRADE"
                message="Expand your collection by trading cards with other players."
            />
        </section>
    </main>
    )
}

export default Dashboard