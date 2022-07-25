import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className='inner-content'>
                <div className='brand'>
                    <Link to="/">
                        <img src='assets/moovy_logo.png' className='moovy_logo' />
                    </Link>
                </div>

                <ul className="nav-links">
                    
                    <li>
                        <Link to="/watched" className='btn'>My Library</Link>
                    </li>
                    <li>
                        <Link to="/add" className='btn'>Search</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

