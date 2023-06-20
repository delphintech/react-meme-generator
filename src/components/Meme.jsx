export default function Meme ({img, topText, bottomText}) {
  return (
    <div className="meme">
      {topText && <h3 className="top">{topText}</h3>}
      <img src={img} alt="meme image"/>
      {bottomText && <h3 className="bottom">{bottomText}</h3>}
    </div>
  )
}
