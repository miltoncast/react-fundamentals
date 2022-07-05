import { useEffect } from "react";

const Card = ({
  image,
  name,
  desc
}) => {
 

  useEffect(()=> {
    console.log('mounted')

    return () => {
      console.log('unmounted')
    }
  }, [name]);


  return (
    <div className="card">
      <img src={`images/${image}`} alt={image}/>
      <h2>{name}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default Card;