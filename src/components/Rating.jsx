function Rating({ children }) {
  let stars = ""
  let roundedNum = Math.round(Number(children))

  switch (roundedNum) {
    case 0:
      stars = <p>☆☆☆☆☆</p>;
      break;
    case 1:
      stars = <p>★☆☆☆☆</p>;
      break;
    case 2:
      stars = <p>★★☆☆☆</p>;
      break;
    case 3:
      stars = <p>★★★☆☆</p>;
      break;
    case 4:
      stars = <p>★★★★☆</p>;
      break;
    case 5:
      stars = <p>★★★★★</p>;
      break;
    default:
  }

  return (
      [stars]
  )
}

export default Rating
