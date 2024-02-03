import React from 'react'
import { Outlet } from 'react-router-dom'
import styles  from './layout.module.css';
export function Layout() {
    console.log(styles)
  return (
    <main className={styles.container}>
      <h2>Main Page</h2>
      <Outlet/>
    </main>
  )
}

