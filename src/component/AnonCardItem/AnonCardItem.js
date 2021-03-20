import React from 'react'
import './anonCardItem.scss'
import Pro from "../Pro/Pro";

const AnonCardItem = (props) => {

    return (
        <div className={'anon-card-item'}>
            <div className={'icon'}>
                {props.icon}
            </div>
            <h2 className={'promo-build-test'}>
                {props.title}
            </h2>
            {props.description}
            <button className={'anon-card-item-btn'}>{props.btnText}</button>
        </div>
    )
}

export default AnonCardItem
