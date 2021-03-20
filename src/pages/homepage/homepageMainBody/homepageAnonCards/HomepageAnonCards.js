import React from 'react'
import './homepageAnonCards.scss'
import AnonCardItem from "../../../../component/AnonCardItem/AnonCardItem";
import {AppstoreOutlined, CodeOutlined, DeploymentUnitOutlined} from "@ant-design/icons";
import Pro from "../../../../component/Pro/Pro";

const HomepageAnonCards = ()=>{

    return (
        <div className={'home-page-anon-cards'}>
            <AnonCardItem  icon={<AppstoreOutlined  style={{ fontSize: '50px', color: 'white' }} />}
                            title={'Build & Test'}
                           description={
                               <p>
                                   Get work done quicker by building out
                                   <strong>entire projects</strong>
                                   or isolating code to
                                   <strong> test features and animations</strong>
                                   . Want to keep it all under wraps?
                                   <a href={'/'}>
                                       <strong>
                                           Upgrade to a <Pro/> account
                                       </strong>
                                   </a>
                                   to keep your work private.
                               </p>
                           }
                            btnText={'Try the Editor'}/>

            <AnonCardItem  icon={<CodeOutlined  style={{ fontSize: '50px', color: 'white' }} />}
                           title={'Learn & Discover'}
                           description={
                               <p>
                                   Just starting out? Browsing, and playing with Pens is a great way to
                                   understand how they were built and how code works. Teaching a class?
                                   <a href={'/'}>
                                       <strong> Professor mode</strong>
                                   </a>
                                   lets your students to see and comment on real-time Pen updates.
                               </p>
                           }
                           btnText={'Learn More'}/>

            <AnonCardItem  icon={<DeploymentUnitOutlined style={{ fontSize: '50px', color: 'white' }} />}
                           title={'Share Your Work'}
                           description={
                               <p>
                                   Become a part of the
                                   <strong>most active front-end community</strong>
                                   in the world by sharing work. Presenting at a conference? Show your code directly in the browser with
                                   . Want to keep it all under wraps?
                                   <a href={'/'}>
                                       <strong>
                                           Presentation Mode
                                       </strong>
                                   </a>
                                   .
                               </p>
                           }
                           btnText={'Try the Editor'}/>
        </div>
    )
}

export default HomepageAnonCards
