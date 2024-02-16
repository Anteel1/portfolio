import React from 'react'
import styles from './styles.module.css'
export default function Card({children}:{children?:any}) {
  return (
    <div className={styles.card}>{children}</div>
  )
}
