import React from 'react'
import HomepageHeader from "./homepageHeader/HomepageHeader";
import HomepageBody from "./homepageMainBody";
import PaginationContainer from "./paginationContainer/PaginationContainer";
import HomepageAnonEditor from "./homepageAnonEditor/HomepageAnonEditor";
import HomepageAnonTopics from "./homepageAnonTopics/HomepageAnonTopics";

const Homepage = ()=>{
    return (
        <div>
            <HomepageHeader/>
            <HomepageBody />
            <PaginationContainer/>
            <HomepageAnonEditor/>
            <HomepageAnonTopics />
        </div>
    )
}

export default Homepage
