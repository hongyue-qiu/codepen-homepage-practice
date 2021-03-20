import React, {useState} from 'react'
import './homepageAnonEditor.scss'
import {Tabs} from "antd";
import {CaretRightFilled,CaretDownFilled} from '@ant-design/icons'
import {AnonEditorArray} from "./constant";

const { TabPane } = Tabs;

const HomepageAnonEditor = () => {
    const [activeTabKey,setActiveTabKey] = useState('1')

    const handleTabClick = (key) => {
        setActiveTabKey(key)
    }

    return (
        <div className={'homepage-anon-editor'}>
            <div className={'homepage-anon-editor-title'}>
                <h2>A front-end environment made for testing and sharing</h2>
                <a href={'/'}>Explore the Editor</a>
            </div>
            <div className={'homepage-anon-editor-content'}>
                <Tabs tabPosition={'left'} type="card" onTabClick={(key)=>handleTabClick(key)}>
                    {AnonEditorArray.map((item) => (
                        <TabPane tab={
                            <div className={'homepage-anon-editor-content-tab'}>
                                <p>
                                    {activeTabKey === item.key? <CaretDownFilled style={{color: '#1890ff'}} />
                                        :<CaretRightFilled style={{color: '#4A6D88'}} />}
                                    {item.title}
                                </p>
                                {activeTabKey === item.key? `${item.description}`:''}
                            </div>
                        } key={item.key}>
                            <div className={'homepage-anon-editor-content-pic'}>picture {item.key}</div>
                        </TabPane>
                    ) )}
                </Tabs>
            </div>
        </div>
    )
}

export default HomepageAnonEditor
