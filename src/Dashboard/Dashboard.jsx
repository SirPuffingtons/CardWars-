import {useState} from 'react'
import Home from './Home/Home'
import Battle from './Battle/Battle'
import Trade from './Trade/Trade'
import './Dashboard.css'

const Dashboard = () => {
    const [tab, setTab] = useState(1)

    return (
    <main className='dashboard'>
        <header>
            <div>Card<span>Wars</span></div>
            <nav>
                <button onClick={() => setTab(1)} className={tab === 1 ? 'active' : ''}>Home</button>
                <button onClick={() => setTab(2)} className={tab === 2 ? 'active' : ''}>Battle</button>
                <button onClick={() => setTab(3)} className={tab === 3 ? 'active' : ''}>Trade</button>
            </nav>
        </header>

        {tab === 1 && <Home />}
        {tab === 2 && <Battle />}
        {tab === 3 && <Trade />}
    </main>
    )
}

export default Dashboard