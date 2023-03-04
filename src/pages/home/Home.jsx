import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import Trusted from '../../components/trusted/Trusted'
import './Home.scss'
import { cards, projects } from '../../data'
import CatCard from '../../components/catCard/CatCard'
import Features from '../../components/features/Features'
import Business from '../../components/business/Business'
import ProjectCard from '../../components/projectCard/ProjectCard'

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
            <Business />
            <Slide slidesToShow={4} arrowsScroll={5}>
                {
                    projects.map(card => (
                        <ProjectCard item={card} key={card.id} />
                    ))
                }
            </Slide>
        </div>
    )
}

export default Home