const Card = ({
  image,
  name,
  desc
}) => {
 
  return (
    <div className="card">
      <img src={`images/${image}`} alt={image}/>
      <h2>{name}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default Card;