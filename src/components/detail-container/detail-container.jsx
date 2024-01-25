import './detail-container.css'
import PriceDetails from '../price-detail/price-detail'

function DetailContainer() {

    return (
      <>
        <div className="detail-container">
            <div className="detail-header">
                <div className="title">
                    <h2>#RT3080</h2>
                    <p>Graphic Design</p>
                </div>
                <p className="client-adress">19 Union Terrace<br />London E1 3EZ<br />United Kingdom</p>
            </div>
            <div className="client-detail">
                <div>
                    <p>Invoice Date</p>
                    <h4>21 Aug 2024</h4>
                </div>
                <div>
                    <p>Bill To</p>
                    <h4>Adam smith</h4>
                </div>
                <div>
                    <p>Sent to</p>
                    <h4>adamsmith@gmail.com</h4>
                </div>
                <div className='bill-infos'>
                    <p>Payment Due</p>
                    <h4>20 Sep 2024</h4>
                </div>
                <div>
                    <p className="bill-adress">19 Union Terrace<br />London E1 3EZ<br />United Kingdom</p>
                </div>
            </div>

            <PriceDetails/>

        </div>
      </>
    )
  }
  
  export default DetailContainer