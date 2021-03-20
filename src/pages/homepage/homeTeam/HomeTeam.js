import React from 'react'
import './homeTeam.scss'
import Pro from "../../../component/Pro/Pro";

const HomeTeam = ()=>{
    return (
        <div className={'home-team'}>
            <div className={'home-team-description'}>
                <h2>Bring the Whole Team</h2>
                <p>
                    Each team and team member gets
                    <strong>all the features of a <Pro/> membership</strong>
                    . That means the Team can do things like upload Assets, use features like
                    <strong> Collab Mode</strong>
                    , Professor Mode, Presentation Mode, and Live View, and apply custom CSS to Posts, Profiles, and Embeds.
                </p>
            </div>

            <button className={'start-team'}>Start a team</button>
            <h3>Loved by hundreds of teams, including:</h3>
        </div>
    )
}

export default HomeTeam
