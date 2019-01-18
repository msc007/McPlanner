import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutLink'


export default function Navbar() {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
      	<Link to="/" className="brand-logo">McPlan</Link>
				<SignedInLinks />
				<SignedOutLinks />
      </div>
    </nav>
  )
}
