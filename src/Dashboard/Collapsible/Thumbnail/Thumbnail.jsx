import {useState} from 'react'
import Modal from '../../Modal/Modal'
import Card from '../../Modal/Card/Card'
import './Thumbnail.css'

const Thumbnail = ({card}) => {
    const [modal, showModal] = useState()

    card = card.split('_')
    
    return <>
    <button className="thumbnail" onClick={e => {showModal(true); e.target.blur()}}>
        <img
            draggable="false"
            src={`/images/cards/${card[0]}-${card[1]}.jpg`} alt="CARD NAME GOES HERE"
        />
    </button>

    {modal && <Modal exit={() => showModal(false)}><Card card={card}/></Modal>}
    </>
    
}

export default Thumbnail