import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignedOutLinks() {
  return (
    <ul className="right">
			<li><NavLink to="/">Signup</NavLink></li>
			<li><NavLink to="/">Login</NavLink></li>
		</ul>
  )
}
