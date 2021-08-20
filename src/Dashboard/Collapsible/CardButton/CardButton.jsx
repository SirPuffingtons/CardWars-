import './CardButton.css'

const CardButton = ({_id}) => {

    return <button className="cardButton">
        <img
            draggable="false"
            src={`/images/cards/${_id.replaceAll(' ', '_').toLowerCase()}.jpg`} alt={_id}
        />
    </button>
    
}

export default CardButton