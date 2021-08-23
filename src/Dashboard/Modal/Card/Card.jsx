import cards from './cards.json'
import './Card.css'

const Card = ({card}) => {
    const {name} = cards[card[0]]

    return <main className="card">
        <header>
            <div>{name.toUpperCase()}</div>
            <div>{card[2]}</div>
        </header>
        <img
            draggable="false"
            src={`/images/cards/${card[0]}-${card[1]}.jpg`} alt="CARD NAME GOES HERE"
        />
        </main>
}

export default Card