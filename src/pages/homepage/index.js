import React from 'react'
import HomepageHeader from "./homepageHeader/HomepageHeader";
import HomepageBody from "./homepageMainBody";
import PaginationContainer from "./paginationContainer/PaginationContainer";
import HomepageAnonEditor from "./homepageAnonEditor/HomepageAnonEditor";
import HomepageAnonTopics from "./homepageAnonTopics/HomepageAnonTopics";
import HomeTeam from "./homeTeam/HomeTeam";

const Homepage = ()=>{
    return (
        <div>
            <HomepageHeader/>
            <HomepageBody />
            <PaginationContainer />
            <HomepageAnonEditor />
            <HomepageAnonTopics />
            <HomeTeam />
        </div>
    )
}

export default Homepage
