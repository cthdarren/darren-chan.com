import React, { Component } from 'react'

export default function SkillsBar({ img, name }) {
    return (
        <div className='d-flex'>
            <div className='me-3 p-2'>
                <img width={30} src={img}></img>
            </div>
            <div className='my-auto'>
                {name}
            </div>
        </div>
    )
}

