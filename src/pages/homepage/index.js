import React from 'react'
import HomepageHeader from "./homepageHeader/HomepageHeader";
import HomepageBody from "./homepageMainBody";
import PaginationContainer from "./paginationContainer/PaginationContainer";

const Homepage = ()=>{
    return (
        <div>
            <HomepageHeader/>
            <HomepageBody />
            <PaginationContainer/>
        </div>
    )
}

export default Homepage
