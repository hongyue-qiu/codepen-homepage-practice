import './index.scss'
import React from 'react'
import HomepageBodyDescription from "./homepageBodyDescription/HomepageBodyDescription";
import HomepageBodyCodeDemo from "./homepageBodyCodeDemo/HomepageBodyCodeDemo";
import HomepageAnonCards from "./homepageAnonCards/HomepageAnonCards";

const HomepageBody = ()=>{

    return (
        <div className={'home-page-body'}>
            <div className={'home-page-body-header'}>
                <HomepageBodyDescription />
                <HomepageBodyCodeDemo />
            </div>
            <HomepageAnonCards />
        </div>
    )
}

export default HomepageBody
