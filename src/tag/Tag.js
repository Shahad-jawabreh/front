import React from 'react'
import styles from './Tag.module.css'
export default function Tag({title,active}) {
  let stylestag= [styles.tag];
  if (active) {
    stylestag.push(styles.active);
}
  return (
    <button className={stylestag}>{title}</button>
  )
}
