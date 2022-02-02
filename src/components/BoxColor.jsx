function BoxColor({r,g,b}) {
    const color = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
        
    }
    return (
        <div className="box" style={color}>
        <p>rgb({r},{g},{b})</p> 
        </div>
    )
        
    }

    export default BoxColor
