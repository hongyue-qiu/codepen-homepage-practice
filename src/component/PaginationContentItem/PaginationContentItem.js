import React from 'react'
import './paginationContentItem.scss'
import {EyeFilled,HeartFilled,MessageFilled} from '@ant-design/icons'

const PaginationContentItem = (props) => {
    return (
        <div className={'pagination-content-item'}>
            <div className={'pagination-item-pic'}>photo</div>
            <div className={'pagination-item-content'} >
                <div className={'pagination-item-faces'}>faces</div>
                <div className={'pagination-item-text'}>
                    <div className={'pagination-item-title'}>{props.title}</div>
                    <div className={'pagination-item-description'}>{props.description}</div>
                </div>
            </div>
            <footer className={'pagination-content-item-footer'}>
                <button className={'pagination-content-item-footer-btn'}><HeartFilled />{props.likes}</button>
                <button className={'pagination-content-item-footer-btn'}><MessageFilled /> {props.message}</button>
                <button className={'pagination-content-item-footer-btn'}><EyeFilled /> {props.views}</button>
            </footer>
        </div>
    )
}

export default PaginationContentItem
