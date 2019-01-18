import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignedOutLinks() {
  return (
    <ul className="right">
			<li><NavLink to="/signup">Signup</NavLink></li>
			<li><NavLink to="/signin">Login</NavLink></li>
		</ul>
  )
}
