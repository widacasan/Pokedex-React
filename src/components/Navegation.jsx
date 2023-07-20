import React from 'react'
import { Outlet } from 'react-router-dom'

export const Navegation = () => {
  return (
    <div>
        <h1>Navegacion</h1>
        <Outlet/>
    </div>
  )
}
