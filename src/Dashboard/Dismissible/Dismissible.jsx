import {useState} from 'react'
import './Dismissible.css'

const Dismissible = ({title, message}) => {
    const [isDismissed, dismiss] = useState(false)

    return <>
    {!isDismissed &&
        <aside className='dismissible'>
            <header>{title}</header>
            <button onClick={() => dismiss(true)}>x</button>
            <main>{message}</main>
        </aside>
    }
    </>
}

export default Dismissible