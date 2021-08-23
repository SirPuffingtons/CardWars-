import './Modal.css'

const Modal = ({children, exit}) => {
    const close = e => {if(e.target === e.currentTarget) exit()}

    return <article className="modal" onClick={close}>{children}</article>
}

export default Modal