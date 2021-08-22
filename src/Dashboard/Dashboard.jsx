import {auth, db, doc, onSnapshot, setDoc, updateProfile} from '../firebase'
import {dbUserSchema} from '../_utils/schemas/dbUserSchema'
import {useEffect, useState} from 'react'
import Dismissible from './Dismissible/Dismissible'
import Collapsible from './Collapsible/Collapsible'
import Thumbnail from './Collapsible/Thumbnail/Thumbnail'
import './Dashboard.css'

const Dashboard = () => {
    const [displayName, setDisplayName] = useState(auth.currentUser.displayName)
    const [dbUser, setDbUser] = useState()
    const [tab, setTab] = useState(1)

    function generateDisplayName() {
        const words = ['Potato', 'Shark', 'Hunter', 'Collector', 'CardMaster', 'Wolf', 'Mystery', 'Doggo', 'Alpaca', 'Lizard', 'Wizard', 'Overlord', 'Tomato']
    
        const word = words[Math.round(Math.random() * (words.length-1))] + `${Math.round(Math.random() * 10000)}`

        updateProfile(auth.currentUser, {displayName: word}).then(() => setDisplayName(auth.currentUser.displayName))
    }

    useEffect(() => {
        const ref = doc(db, 'users', auth.currentUser.uid)

        onSnapshot(ref, user =>
            user.exists()
                ? setDbUser(user.data())
                : setDoc(ref, dbUserSchema).then(res => setDbUser(res.data()), generateDisplayName()))
    }, [])

    if(!dbUser) return <></>

    return <main className='dashboard'>
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
                {dbUser.cards.map(card => <Thumbnail key={card} _id={card} />)}
            </Collapsible>

            <Collapsible title="MY STATS" collapsed />

            <Collapsible title='OPTIONS'>
                <div className="cols2">
                <button onClick={() => generateDisplayName()}>Edit Profile</button>
                <button onClick={() => auth.signOut()}>Sign Out</button>
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
}

export default Dashboard