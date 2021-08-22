import './Thumbnail.css'

const Thumbnail = ({_id}) => {

    return <button className="thumbnail">
        <img
            draggable="false"
            src={`/images/cards/${_id.replaceAll(' ', '_').toLowerCase()}.jpg`} alt={_id}
        />
    </button>
    
}

export default Thumbnail