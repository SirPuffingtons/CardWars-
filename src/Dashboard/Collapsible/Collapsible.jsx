import {useState} from 'react'
import './Collapsible.css'

const Collapsible = ({
    title='COLLAPSIBLE',
    children,
    cards=false,
    collapsed=false
}) => {

    const [isCollapsed, collapse] = useState(collapsed)

    return (
        <section className={isCollapsed ? 'collapsible collapsed' : 'collapsible'}>
            
            <header onClick={() => collapse(!isCollapsed)}>{title}<span>▼</span></header>
            <main className={cards ? 'cards' : undefined}>{children}</main>
            
        </section>
    )
    
}

export default Collapsible