// import data from "../assets/data"
import React from 'react'
import Meme from "./Meme"

export default function Form() {
  const [meme, setMeme] = React.useState({topText: 0, bottomText: 0, img: 0})

  const [allMemes, setAllMeme] = React.useState([])

  function handleClick () {
    const rand = Math.floor(Math.random() * allMemes.length)
    const randMeme = allMemes[rand]
    setMeme(prevMeme => ({...prevMeme, img: randMeme.url}))
  }

  function handleForm(event) {
    setMeme(prevMeme => ({...prevMeme, [event.target.name]: event.target.value}))
  }

  React.useEffect(() => {
    console.log('API fetch')
      fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMeme(data.data.memes))
  }, [])

  return (
    <div className="content">
      <div className="form">
        <section>
          <input type="text" placeholder=" Top text" onChange={handleForm} name="topText" value={meme.topText}/>
          <input type="text" placeholder=" Bottom text" onChange={handleForm} name="bottomText" value={meme.bottomText} />
        </section>
        <input type="submit" id="submit" value="Get a new meme image 🖼️" onClick={handleClick} />
      </div>
      {meme.img && <Meme {...meme} />}
    </div>
  )
}
