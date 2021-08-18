import {useState} from 'react'
import './Collapsible.css'

const Collapsible = ({collapsed=false, title='COLLAPSIBLE', children}) => {
    const [isCollapsed, collapse] = useState(collapsed)

    return (
        <section className={isCollapsed ? 'collapsible collapsed' : 'collapsible'}>
            <header onClick={() => collapse(!isCollapsed)}>{title}<span>▼</span></header>
            <main>{children}</main>
        </section>
    )
}

export default Collapsible