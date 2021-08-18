import './Card.css'

const Card = ({
    name='Default Card',
    level=1,
    xp=[50, 100]
}) => {
    return (
        <main className='card'>
            <header><div>{name}</div><div>{level}</div></header>
            
        </main>
    )
}

export default Card