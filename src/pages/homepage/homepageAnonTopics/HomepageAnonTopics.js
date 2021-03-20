import React from 'react'
import './homepageAnonTopics.scss'
import AnonTopicsItem from "../../../component/AnonTopicsItem/AnonTopicsItem";

const HomepageAnonTopics = ()=>{
    return (
        <div className={'homepage-anon-topics'}>
            <AnonTopicsItem name={'React'} />
            <AnonTopicsItem name={'Vue'} />
            <AnonTopicsItem name={'Tailwind'} />
            <AnonTopicsItem name={'Sass'} />
            <AnonTopicsItem name={'GSAP'} />
            <div className={'homepage-anon-topics-description'}>
                <h2>Get Started Quicker</h2>
                <p>
                    Get inspiration from Pens using frameworks, libraries, and design patterns. Then, start your own with
                    <strong>premade templates</strong>
                    .
                </p>
                <a href={'/'}>Explore Topics ></a>
            </div>
        </div>
    )
}

export default HomepageAnonTopics
