import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import Trusted from '../../components/trusted/Trusted'
import './Home.scss'
import { cards } from '../../data'
import CatCard from '../../components/catCard/CatCard'
import Features from '../../components/features/Features'

const Home = () => {
    return (
        <div className='home'>
            <Featured />
            <Trusted />
            <Slide slidesToShow={5} arrowsScroll={5}>
                {
                    cards.map(card => (
                        <CatCard item={card} key={card.id} />
                    ))
                }
            </Slide>
            <Features />
        </div>
    )
}

export default Home