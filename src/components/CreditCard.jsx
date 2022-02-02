import visa from "../assets/images/visa.png";
import masterCard from "../assets/images/master-card.svg"

function CreditCard({type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}) {
    let card;

    switch (type) {
        case "Visa":
            card = visa;
            break;
        case "Master Card":
            card = masterCard;
            break;
        default:
            
    };

    const lastNumbers = number.slice(-4);
    const year = expirationYear.toString().slice(-2)
    console.log(year)
    const colorBg = {
        backgroundColor: bgColor,
        color: color
    }

    return (
        <div className="box" style={colorBg}>
        <img src={card} alt="" width="10%" />
        <h4>•••• •••• •••• {lastNumbers}</h4>
        <h5>Expires {expirationMonth}/{year}</h5>
        <h5>{bank}</h5>
        <h5>{owner}</h5>

       
        </div>
    )
}


export default CreditCard