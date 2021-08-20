import {FirebaseContext} from '../App'
import {useContext, useEffect, useState} from 'react'
import Dismissible from './Dismissible/Dismissible'
import Collapsible from './Collapsible/Collapsible'
import CardButton from './Collapsible/CardButton/CardButton'
import './Dashboard.css'

const Dashboard = () => {
    const {f} = useContext(FirebaseContext)

    const [databaseUser, setDatabaseUser] = useState()
    const [displayName, setDisplayName] = useState(f.auth.currentUser.displayName)

    useEffect(() => {
        const ref = f.doc(f.database, 'users', f.auth.currentUser?.uid)

        f.onSnapshot(ref, user => {
            if(user.exists()) {setDatabaseUser(user.data())}

            else f.setDoc(ref, f.userSchema)
            .then(res => {
                setDatabaseUser(res.data())
                console.log(databaseUser)

                f.updateProfile(f.auth.currentUser, {displayName: f.generateDisplayName()})
                .then(() => setDisplayName(f.auth.currentUser.displayName))
            })
        })
    }, [f, databaseUser])

    const [tab, setTab] = useState(1)

    if(!databaseUser) return <></>

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
                {databaseUser.cards?.map(card => <CardButton key={card.name} _id={card.name} />)}
                {/* For each card in the account, spawn a CardButton component. A CardButton, when clicked, will spawn a modal window that displays the full Card element.*/}
            </Collapsible>

            <Collapsible title="MY STATS" collapsed />

            <Collapsible title='OPTIONS'>
                <div className="cols2">
                <button onClick={() => f.updateProfile(f.auth.currentUser, {displayName: f.generateDisplayName()}).then(() => setDisplayName(f.auth.currentUser.displayName))}>Edit Profile</button>
                <button onClick={() => f.auth.signOut()}>Sign Out</button>
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