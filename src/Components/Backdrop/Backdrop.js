import React, {useState} from 'react';
import styles from '../Backdrop/Backdrop.module.css'

const Backdrop = (props) =>{
 
  return(
      <div className={styles.Backdrop} onClick={props.clicked}>
      
    </div>
  )
}
export default Backdrop;