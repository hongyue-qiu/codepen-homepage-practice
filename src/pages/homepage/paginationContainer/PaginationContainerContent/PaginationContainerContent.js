import React from 'react'
import './paginationContainerContent.scss'
import PaginationContentItem from "../../../../component/PaginationContentItem/PaginationContentItem";

const PaginationContainerContent = () => {
    return (
        <div className={'pagination-container-content'}>
            <div className={'pagination-container-description'}>
                <h2>Find inspiration from 1.8 million+ front-end designers and developers.</h2>
                <p>Browse and share work from world-class designers and developers in the front-end community.</p>
            </div>
            <PaginationContentItem title={'Tetradic Love'} description={'Kristian Ekfors'} likes={'19'} message={'0'} views={'369'}/>
            <PaginationContentItem title={'Bouncy Line SVG'} description={'Nelson Rodrigues'} likes={'23'} message={'1'} views={'973'}/>
            <PaginationContentItem title={'Color Visualizer'} description={'Mert Cukuren'} likes={'5'} message={'2'} views={'258'}/>
            <PaginationContentItem title={'Neuomorphism'} description={'Colleen Lohr 🙃'} likes={'6'} message={'0'} views={'317'}/>
            <PaginationContentItem title={'Pricing Card Design'} description={'Aniruddha Banerjee'} likes={'11'} message={'0'} views={'262'}/>
        </div>
    )
}

export default PaginationContainerContent
