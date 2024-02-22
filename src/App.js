import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import "./App.css"
import TextUtils from './components/TextUtils'
import MovingText from "./components/MovingText"
import CardMenu from './components/CardMenu'
import Contact from './components/Contact'
import LogForm from './components/LogForm'
import Tags from './components/Tags'
import Companies from './components/Companies'

export default function App() {

  const [mode, newMode] = useState("dark")
  const [text, newText] = useState("Dark")

  const toggleMode = () => {

    if (mode === "light") {
      newMode("dark")
      newText("Dark")

    } else {
      newMode("light")
      newText("Light")
    }
  }

  let title = "Metaverse.code"

  return (
    <div style={{ backgroundColor: mode === "light" ? "white" : "black" }} >
      <Navbar title={title} mode={mode} text={text} toggleMode={toggleMode} />
      <MovingText mode={mode} />
      <Routes>
        <Route index element={<TextUtils mode={mode} title={title} />} />
        <Route path='/textUtils' element={<TextUtils mode={mode} title={title} />} />
        <Route path='/companies' element={<Companies mode={mode} title={title} />} />
        <Route path='/cardmenu' element={<CardMenu mode={mode} title={title} />} />
        {/* <Route path='/contact' element={<Contact mode={mode} title={title} />} /> */}
        <Route path='/logform' element={<LogForm mode={mode} title={title} />} />
      </Routes>
      <Tags title={title} mode={mode}  />
      <Footer title={title} mode={mode} />
    </div>
  )
}
