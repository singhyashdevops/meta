import React from 'react'

export default function Tags(props) {

    let paraStyle = { fontSize: "1em", color: props.mode === "light" ? "black" : "#0070ff", padding: "3em 0em", fontFamily: 'oswald' }
    
    return (
        <div className='container'>
            <div>
                <p style={paraStyle}>#coding #programming #developer #programmer #code #codinglife #coder #software #technology #ilovecoding #softwareengineer #devlife #softwareengineering #development #geek #geeklife #programmerlife #programminglife #codingisfun #nerd #coderlife #codingfun #compassion #passionate #html #python #webdesign #php #java #javascript #python #ruby #angular #typescript #go #kotlin #amazon #apple </p>
            </div>
        </div>
    )
}
