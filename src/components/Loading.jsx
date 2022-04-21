import loading from '../assets/loading.gif';
import { createPortal } from "react-dom";

export const Loading = () => {

    const style = {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: '0',
        left: '0',
        zIndex: '10',
        textAlign: 'center'
    }

  return createPortal(
    <div style={style}>
        <p>Lading...</p> 
        <img src={loading} alt="loading" />
        </div>,
        document.querySelector('#loading')
  )
}
