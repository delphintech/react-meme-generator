export default function Meme ({img, topText, bottomText}) {
  return (
    <div className="meme">
      {topText && <p>{topText}</p>}
      <img src={img} alt="meme image"/>
      {bottomText && <p>{bottomText}</p>}
    </div>
  )
}
