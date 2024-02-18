import React from 'react'

export default function Tags(props) {

    let paraStyle = {fontSize: "20px", letterSpacing: "2px", color: props.mode === "light" ? "red" : "#ff9e9e"}


    return (
        <div className='my-5 container'>
            <div className='my-5'>
                <p style={paraStyle}>#coding #programming #developer #programmer #code #codinglife #coder #software #technology #ilovecoding #softwareengineer #devlife #softwareengineering #development #geek #geeklife #programmerlife #programminglife #codingisfun #nerd #coderlife #codingfun #compassion #passionate #html #python #webdesign #php #java #javascript #python #ruby #angular #typescript #go #kotlin #amazon #apple </p>
            </div>
        </div>
    )
}
