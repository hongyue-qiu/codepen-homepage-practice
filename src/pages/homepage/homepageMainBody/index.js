import './index.scss'
import React from 'react'
import HomepageBodyDescription from "./homepageBodyDescription/homepageBodyDescription";

const HomepageBody = ()=>{

    return (
        <div className={'home-page-body'}>
            <HomepageBodyDescription />
            <div className={'home-page-body-aside'}>aaa</div>
        </div>
    )
}

export default HomepageBody
