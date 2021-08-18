import Collapsible from '../_shared/Collapsible/Collapsible'
import Card from '../_shared/Card/Card'
import './Home.css'

const Home = () => {

    return (
        <main className='home'>
            <aside className='news'>
                <header>VERSION 0.1</header>
                <button>x</button>
                <main>
                    This is the first version of CardWars. We're thrilled to have you with us!
                </main>
            </aside>

            <Collapsible title='MY CARDS'>
                <Card />
            </Collapsible>
        </main>
    )

}

export default Home