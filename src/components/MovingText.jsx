/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'

export default function MovingText(props) {

    let mText = { backgroundColor: props.mode === "dark" ? "#212529" : "#ffa1a1", color: props.mode === "light" ? "black" : "white", fontSize: "20px", height: "25px"}

    return (
        <div style={mText}>
            <marquee className="mText" behavior="" direction="">This website is still under production, please refresh after 30 hours, to see a new update, Thank You for visiting Metaverse.code made by Yash Singh.</marquee>
        </div>
    )
}