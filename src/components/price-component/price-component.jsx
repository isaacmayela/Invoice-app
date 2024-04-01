import "./price-component.css"

function PriceComponenent({name, quantity, price, total, style}) {

    return (
      <>
        <div className={"price-component" + ` ${style}`}>
            <div className="price-container-elements">
                <p>{name}</p>
                <div className="price">
                    <p>{quantity}</p>
                    <p>{price}</p>
                    <p>{total}</p>
                </div>
            </div>
        </div>
      </>
    )
}
  
export default PriceComponenent