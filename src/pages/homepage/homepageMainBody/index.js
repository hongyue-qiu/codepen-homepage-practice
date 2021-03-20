import './index.scss'
import React from 'react'
import HomepageBodyDescription from "./homepageBodyDescription/HomepageBodyDescription";
import HomepageBodyCodeDemo from "./homepageBodyCodeDemo/HomepageBodyCodeDemo";

const HomepageBody = ()=>{

    return (
        <div className={'home-page-body'}>
            <HomepageBodyDescription />
            <HomepageBodyCodeDemo />
        </div>
    )
}

export default HomepageBody
