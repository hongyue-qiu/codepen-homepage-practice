import React from 'react'
import './paginationContainer.scss'
import PaginationContainerContent from "./PaginationContainerContent/PaginationContainerContent";

const PaginationContainer = () => {
    return (
        <div className={'pagination-container'}>
            <PaginationContainerContent/>
            <button className={'pagination-container-btn'}>Next ></button>
        </div>
    )
}

export default PaginationContainer
