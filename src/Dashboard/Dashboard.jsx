import './Dashboard.css'

const Dashboard = ({auth}) => {

    const signOut = () => auth.signOut()

    return (
    <main>
        <header className='dashboard'>
            <div>DASHBOARD</div>
        </header>
        <button onClick={signOut}>Sign Out</button>
    </main>
    )

}

export default Dashboard