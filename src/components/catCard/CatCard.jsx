/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import './CatCard.scss'


const CatCard = ({ item }) => {

    const { img, title, desc } = item;
    return (
        <Link to='/gigs?cat=design'>
            <div className='catCard'>
                <img src={img} alt={title} />
                <span className="desc">{desc}</span>
                <span className="title">{title}</span>
            </div>
        </Link>
    )
}

export default CatCard