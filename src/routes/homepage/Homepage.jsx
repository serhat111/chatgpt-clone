import { Link } from 'react-router-dom'
import './homepage.css'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'

const Homepage = () => {


  const [typingStatus, setTypingStatus ] = useState("human1")
  // const test = async () => {
  //   await fetch("http://localhost:3000/api/test", {
  //     credentials:"include",
  //   })
  // }

  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className='orbital' />
      <div className="left">
        <h1>Oura AI</h1>
        <h2>Reimagine Your Work with Oura AI</h2>
        <h3>Step into a new era of creativity and efficiency. Our AI tools are designed to help you achieve more, faster.</h3>
        <Link to="/dashboard">Get Started</Link>
        {/* <button onClick={test}>Test</button> */}
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className='bot'/>
          <div className="chat">
            <img src={typingStatus === "human1" ? "/human1.jpeg" : typingStatus === "human2" ? "/human2.jpeg" : "bot.png"} alt="" />
              <TypeAnimation 
                sequence={[
                "Human: Best Places to Visit?",
                2000, () => {
                  setTypingStatus("bot")
                },
                "Bot: Check out Paris, Istanbul, and Tokyo!",
                2000, () => {
                  setTypingStatus("human2")
                },
                "Human2: What's the best programming language?",
                2000,() => {
                  setTypingStatus("bot")
                },
                "Bot: Some amazing choices include Python, Java and Rust!",
                2000, () => {
                  setTypingStatus("human1")
                } 
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
              />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>I</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage