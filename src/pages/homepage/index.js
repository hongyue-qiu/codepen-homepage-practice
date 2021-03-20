import React from 'react'
import HomepageHeader from "./homepageHeader/HomepageHeader";
import HomepageBody from "./homepageMainBody";
import PaginationContainer from "./paginationContainer/PaginationContainer";
import HomepageAnonEditor from "./homepageAnonEditor/HomepageAnonEditor";

const Homepage = ()=>{
    return (
        <div>
            <HomepageHeader/>
            <HomepageBody />
            <PaginationContainer/>
            <HomepageAnonEditor/>
        </div>
    )
}

export default Homepage
