import React from 'react'
import './homepageBodyDescription.scss'

const HomepageBodyDescription = ()=>{

    return (
        <div className={'home-page-body-description'}>
            <div className={'logo-icon'}>logo</div>
            <h1 className={'home-page-body-description-content'}>The best place to build, test, and discover front-end code.</h1>
            <p>
                CodePen is a
                <strong>social development environment</strong>
                for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.
            </p>
            <button className={'home-page-body-description-btn'}>
                Sign Up for Free
            </button>
        </div>
    )
}

export default HomepageBodyDescription
