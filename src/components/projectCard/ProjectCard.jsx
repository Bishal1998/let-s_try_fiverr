import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectCard.scss'

const ProjectCard = ({ item }) => {
    const { id, img, pp, cat, username } = item;
    return (
        <Link to='/gigs?cat=design' className='link'>
            <div className='projectCard'>
                <img src={img} alt={cat} />
                <div className="info">
                    <img src={pp} alt={username} />
                    <div className="texts">
                        <h2>{cat}</h2>
                        <span>{username}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard