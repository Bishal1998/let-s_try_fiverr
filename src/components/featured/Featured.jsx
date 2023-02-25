import React from 'react'
import './Featured.scss'
import Man from '../../../public/img/man.png'
import Search from '../../../public/img/search.png'

const Featured = () => {
    return (
        <div className='featured'>
            <div className="container">
                <div className="left">
                    <h1>Find the perfect <i>freelance</i> services for your business</h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src={Search} alt="Search" />
                            <input type="text" placeholder='Try "building mobile app" ' />
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Web Design</button>
                        <button>WordPress</button>
                        <button>Logo Design</button>
                        <button>AI Services</button>
                    </div>
                </div>
                <div className="right">
                    <img src={Man} alt="Man" />
                </div>
            </div>
        </div>
    )
}

export default Featured