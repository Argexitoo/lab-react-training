import Rating from "./Rating"

function DriverCard({name, rating, img, car}) {
    
  return (
      <div className="box">
      <img src={img} alt="" width="50%"/>
          <h4>{name}</h4>
          <Rating>{rating}</Rating>
          <h5>{car.model}-{car.licensePlate}</h5>
          
      </div>
  )
}

export default DriverCard