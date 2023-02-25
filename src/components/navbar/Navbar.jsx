import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const { pathname } = useLocation()

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        }
    }, [])

    const currentUser = {
        id: 1,
        userName: "John Smith",
        isSeller: true
    }

    return (
        <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
            <div className="container">
                <Link to='/' className='link'>
                    <div className="logo">
                        <span className="text">fiverr</span>
                        <span className="dot">.</span>
                    </div>
                </Link>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>USD</span>
                    {!currentUser && <span>Sign in</span>}
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {
                        currentUser && (
                            <div className="user" onClick={() => setOpen(!open)}>
                                <img src="https://bit.ly/40Sdrpy" alt="" />
                                <span>{currentUser?.userName}</span>
                                {
                                    open && (
                                        <div className="options">
                                            {
                                                currentUser?.isSeller && (
                                                    <>
                                                        <Link className='link' to='/mygigs'>Gigs</Link>
                                                        <Link className='link' to='/add'>Add New Gigs</Link>
                                                    </>
                                                )
                                            }
                                            <Link className='link' to='/orders'>Orders</Link>
                                            <Link className='link' to='/messages'>Messages</Link>
                                            <Link className='link' to='/'>Logout</Link>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            {
                (active || pathname !== '/') && (
                    <>
                        <hr />
                        <div className="menu">
                            <Link to='/' className='link'>Graphics & Design</Link>
                            <Link to='/' className='link'>Video & Animation</Link>
                            <Link to='/' className='link'>Writing & Translation</Link>
                            <Link to='/' className='link'>AI Services</Link>
                            <Link to='/' className='link'>Digital Marketing</Link>
                            <Link to='/' className='link'>Music & Audio</Link>
                            <Link to='/' className='link'>Programming & Tech</Link>
                            <Link to='/' className='link'>Business</Link>
                            <Link to='/' className='link'>Lifestyle</Link>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Navbar