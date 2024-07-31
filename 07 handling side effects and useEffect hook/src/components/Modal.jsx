import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, onClose}) {
  const dialog = useRef();

  // we have used the useEffect to synchronize these functions, so that it will run after the component runs completely.
  // but here are some effect dependencies we have to consider
  // the props or state change values are the effect dependencies 
  useEffect(() => {
    if(open){
      dialog.current.showModal();
    }
    else{
      dialog.current.close();
    }
  },[open]);        
  // so we have to mention the state change values and if open was true and is true it will not run gain and if it was true and now is false
  // it will run, vice versa is there

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
