import data from "../assets/data"
import React from 'react'
import Meme from "./Meme"

export default function Form() {
  const [meme, setMeme] = React.useState({topText: 0, bottomText: 0, img: 0})

  const [allMemes, setAllMemes] = React.useState(data.data.memes)

  function handleClick () {
    const rand = Math.floor(Math.random() * allMemes.length)
    const randMeme = allMemes[rand]
    setMeme(prevMeme => ({...prevMeme, img: randMeme.url}))
  }

  function topForm(event) {
    const text = event.target.value
    setMeme(prevMeme => ({...prevMeme, topText: text}))
  }

  function bottomForm() {
    const text = event.target.value
    setMeme(prevMeme => ({...prevMeme, bottomText: text}))
  }

  return (
    <div className="content">
      <div className="form">
        <section>
          <input type="text" placeholder=" Top text" onChange={topForm} />
          <input type="text" placeholder=" Bottom text" onChange={bottomForm} />
        </section>
        <input type="submit" id="submit" value="Get a new meme image 🖼️" onClick={handleClick} />
      </div>
      {meme.img && <Meme {...meme} />}
    </div>
  )
}
