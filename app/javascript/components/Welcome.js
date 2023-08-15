import React from 'react'
import { NavLink } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <h3>Welcome to rails with react</h3>
      <NavLink to="/greeting">Link to greetings route</NavLink>
    </div>
  )
}

export default Welcome