import React from 'react'
import HomepageHeader from "./homepageHeader/HomepageHeader";
import HomepageBody from "./homepageMainBody";
import PaginationContainer from "./paginationContainer/PaginationContainer";
import HomepageAnonEditor from "./homepageAnonEditor/HomepageAnonEditor";
import HomepageAnonTopics from "./homepageAnonTopics/HomepageAnonTopics";
import HomeTeam from "./homeTeam/HomeTeam";
import './index.scss'

const Homepage = ()=>{
    return (
        <div>
            <HomepageHeader/>
            <HomepageBody />
            <PaginationContainer />
            <HomepageAnonEditor />
            <HomepageAnonTopics />
            <HomeTeam />
            <footer className={'homepage-footer'}>codepen</footer>
        </div>
    )
}

export default Homepage
