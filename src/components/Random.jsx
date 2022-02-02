function Random({min,max}) {
    const random = Math.floor(Math.random() * (min - max))
    return (
        <p>Random value between {min} and {max} => {random}</p>
    )
}

export default Random