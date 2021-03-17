import { Input } from 'antd';
import {InsertRowAboveOutlined, LayoutOutlined, SearchOutlined, TableOutlined, UserOutlined} from '@ant-design/icons';
import './homepageHeader.scss'
import React, {useState} from 'react'

const HomepageHeader = ()=>{
    const [showSearchSelect,setShowSearchSelect] = useState(false)
    const handleSearchInputFocus = () =>{
        setShowSearchSelect(true)
    }
    const handleSearchInputBlur = () =>{
        setShowSearchSelect(false)
    }
    return (
        <div className={'home-page-head'}>
            <Input className={'search'}
                   onFocus={handleSearchInputFocus}
                   onBlur={handleSearchInputBlur}
                   prefix={<SearchOutlined style={{ fontSize: '20px', color: '#868ca0' }}  />}
                   allowClear placeholder={'Search CodePen...'} />
            {showSearchSelect && <div className={'search-select'}>
                <button className={'search-select-btn'}><UserOutlined /> Your work</button>
                <button className={'search-select-btn'}><InsertRowAboveOutlined /> Pens</button>
                <button className={'search-select-btn'}><LayoutOutlined /> Projects</button>
                <button className={'search-select-btn'}><TableOutlined /> Collections</button>
            </div>}

            <button className={'sign-up'}>Sign up</button>
            <button className={'log-in'}>Log in</button>
        </div>
    )
}

export default HomepageHeader
