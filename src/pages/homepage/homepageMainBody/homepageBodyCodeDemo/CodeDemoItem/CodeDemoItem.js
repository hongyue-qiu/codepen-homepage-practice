import React from 'react'
import './codeDemoItem.scss'
import { SettingFilled, DownOutlined } from '@ant-design/icons';

const CodeDemoItem = ()=>{

    return (
        <>
            <div className={'code-demo-item'}>
                <header>
                    <SettingFilled style={{ color: 'white' }} />
                    <span>HTML</span>
                    <DownOutlined />
                </header>
                <div className={'code-demo-content'}>
                    <code style={{color:'white'}}>
                        <span style={{color:'#a88038'}}>&lt;div</span>
                        <span style={{color:'#e1ca72'}}>class</span>
                        <span style={{color:'white'}}>=</span>
                        <span style={{color:'#74b087'}}>"react"</span>
                        <span style={{color:'#a88038'}}>&gt;&lt;/div&gt;</span>
                    </code>
                </div>
            </div>
            <div className={'code-demo-item'}>
                <header>
                    <SettingFilled style={{ color: 'white' }} />
                    <span>HTML</span>
                    <DownOutlined />
                </header>
                <div className={'code-demo-content'}>
                    <code style={{color:'white'}}>
                        <span style={{color:'#a88038'}}>&lt;div</span>
                        <span style={{color:'#e1ca72'}}> class</span>
                        <span style={{color:'white'}}>=</span>
                        <span style={{color:'#74b087'}}>"react"</span>
                        <span style={{color:'#a88038'}}>&gt;&lt;/div&gt;</span>
                    </code>
                </div>
            </div>
            <div className={'code-demo-item code-demo-item2'}>
                <header>
                    <SettingFilled style={{ color: 'white' }} />
                    <span>SCSS</span>
                    <DownOutlined />
                </header>
                <div className={'code-demo-content'}>
                    <code style={{color:'white'}}>
                        <span style={{color:'#a88038'}}>&lt;div</span>
                        <span style={{color:'#e1ca72'}}> class</span>
                        <span style={{color:'white'}}>=</span>
                        <span style={{color:'#74b087'}}>"react"</span>
                        <span style={{color:'#a88038'}}>&gt;&lt;/div&gt;</span>
                    </code>
                </div>
            </div>
            <div className={'code-demo-item code-demo-item3'}>
                <header>
                    <SettingFilled style={{ color: 'white' }} />
                    <span>JS</span>
                    <DownOutlined />
                </header>
                <div className={'code-demo-content'}>
                    <code style={{color:'white'}}>
                        <span style={{color:'#a88038'}}>&lt;div</span>
                        <span style={{color:'#e1ca72'}}> class</span>
                        <span style={{color:'white'}}>=</span>
                        <span style={{color:'#74b087'}}>"react"</span>
                        <span style={{color:'#a88038'}}>&gt;&lt;/div&gt;</span>
                    </code>
                </div>
            </div>
        </>
    )
}

export default CodeDemoItem
