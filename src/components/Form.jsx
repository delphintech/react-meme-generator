import data from "../assets/data"
import React from 'react'
import Meme from "./Meme"

export default function Form() {
  const [memeImg, setMemeImg] = React.useState("")

  function handleClick () {
    const list = data.data.memes
    const rand = Math.floor(Math.random() * list.length)
    const meme = list[rand]
    setMemeImg(meme.url)
    console.log(memeImg)
  }

  return (
    <div className="content">
      <div className="form">
        <section>
          <input type="text" placeholder=" Top text" />
          <input type="text" placeholder=" Bottom text" />
        </section>
        <input type="submit" id="submit" value="Get a new meme image 🖼️" onClick={handleClick} />
      </div>
      <div className="meme">
        <Meme url={memeImg} />
      </div>
    </div>
  )
}
