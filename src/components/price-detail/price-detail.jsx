import "./price-detail.css"
import PriceComponenent from "../price-component/price-component"

function PriceDetails() {

    const list = [1,2,3,4,5,6,7,8,9]

    return (
      <>
        <div className="price-detail">
            <div className="price-detail-header">
                <PriceComponenent name={"Items Name"} quantity={"Quantity"} price={"Price"} total={"Total"}/>
            </div>
            <div className="price-container">
                {
                    list.map((priceInfo,index) =>(
                        <PriceComponenent name={"Banner Design"} quantity={"1"} price={"$185"} total={"$225"} style={"strong"} key={index}/>
                    ))
                }
            </div>
        </div>
        <div className="total">
            <p>Total Due</p>
            <h2>$556</h2>
        </div>
      </>
    )
  }
  
  export default PriceDetails