function IdCard({lastName, firstName, gender, height, birth, picture}) {
    return (
        <div>
        <img src={picture} alt="" />
        <h3>First name: {firstName}</h3>
        <h3>Last name: {lastName}</h3>
        <h3>Gender: {gender}</h3>
        <h3>Height: {height}</h3>
        <h3>Birth: {birth.toDateString()}</h3>
        </div>
    )
}

export default IdCard