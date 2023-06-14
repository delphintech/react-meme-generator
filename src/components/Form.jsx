import data from "../assets/data"

export default function Form() {
  function handleClick () {
    const list = data.data.memes
    const rand = Math.floor(Math.random() * list.length)
    const meme = list[rand]
    console.log(meme.url)
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
      </div>
    </div>
  )
}
