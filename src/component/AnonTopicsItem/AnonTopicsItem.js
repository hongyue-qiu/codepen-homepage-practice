import React from 'react'
import './anonTopicsItem.scss'

const AnonTopicsItem = (props)=>{
    return (
        <div className={'homepage-anon-topics-item'}>
            <div className={'anon-topics-item-pic'}>picture</div>
            <h3>{props.name}</h3>
        </div>
    )
}

export default AnonTopicsItem
