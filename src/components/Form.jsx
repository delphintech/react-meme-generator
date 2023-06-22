import data from "../assets/data"
import React from 'react'
import Meme from "./Meme"

export default function Form() {
  const [meme, setMeme] = React.useState({topText: 0, bottomText: 0, img: 0})

  const [allMemes] = React.useState(data.data.memes)

  function handleClick () {
    const rand = Math.floor(Math.random() * allMemes.length)
    const randMeme = allMemes[rand]
    setMeme(prevMeme => ({...prevMeme, img: randMeme.url}))
  }

  function handleForm(event) {
    setMeme(prevMeme => ({...prevMeme, [event.target.name]: event.target.value}))
  }


  return (
    <div className="content">
      <div className="form">
        <section>
          <input type="text" placeholder=" Top text" onChange={handleForm} name="topText" />
          <input type="text" placeholder=" Bottom text" onChange={handleForm} name="bottomText" />
        </section>
        <input type="submit" id="submit" value="Get a new meme image 🖼️" onClick={handleClick} />
      </div>
      {meme.img && <Meme {...meme} />}
    </div>
  )
}
