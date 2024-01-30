import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <h1>Doji Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
    </div>
  )
}

export default Navbar