import React from 'react';
import Styles from '../Modal/Modal.module.css';
const Modal = (props)=>{
  let ModalClasses = [Styles.Modal];
  if(props.show){
    ModalClasses = [Styles.Modal, Styles.Open]
  }
  return(
    <div className={ModalClasses.join(' ')}>
        <div className={Styles.ModalNav} onClick={props.clicked}>
          <div></div>
          <div></div>
        </div>
    </div>
  )
}
export default Modal