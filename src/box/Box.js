import React from 'react'
import styles from './Box.module.css'
export default function Box({colorfull,children,extrapadding }) {
    let stylesbox = [styles.box];
    if (colorfull) {
      stylesbox.push(styles.colorfull);
  }
  if(extrapadding){
    stylesbox.push(styles.paddingex);
  }
      

  return (
    <div className={stylesbox.join(' ')}>
       {children}
    </div>
  )

  }