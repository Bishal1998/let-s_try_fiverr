import React from 'react'
import './Features.scss'
import check from '../../../public/img/check.png'

const Features = () => {
    return (
        <div className="features">
            <div className="container">
                <div className="item">
                    <h1>A whole world of freelance talent at your fingertips</h1>
                    <div className="title">
                        <img src={check} alt="" />
                        The best for every budget
                    </div>
                    <p>
                        Find high-quality services at every price point. No hourly rates,
                        just project-based pricing.
                    </p>
                    <div className="title">
                        <img src={check} alt="" />
                        Quality work done quickly
                    </div>
                    <p>
                        Find the right freelancer to begin working on your project within
                        minutes.
                    </p>
                    <div className="title">
                        <img src={check} alt="" />
                        Protected payments, every time
                    </div>
                    <p>
                        Always know what you'll pay upfront. Your payment isn't released
                        until you approve the work.
                    </p>
                    <div className="title">
                        <img src={check} alt="" />
                        24/7 support
                    </div>
                    <p>
                        Find high-quality services at every price point. No hourly rates,
                        just project-based pricing.
                    </p>
                </div>
                <div className="item">
                    <iframe width="1193" height="671" src="https://www.youtube.com/embed/KI5CnJ9u5ok" title="React Fiverr App Design Tutorial  | React UI Full Course for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Features