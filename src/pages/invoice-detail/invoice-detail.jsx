import "./invoice-detail.css"
import { Link } from "react-router-dom"
import InvoiceActions from "../../components/invoice-actions/invoice-actions"
import DetailContainer from "../../components/detail-container/detail-container"

function InvoiceDetail() {

  return (
    <>
      <div className="detail-header">
        <Link to={"/home"}>
          <i class="fa-solid fa-chevron-left"></i>
          <h4>Go back</h4>
        </Link>
      </div>

      <InvoiceActions/>
      <DetailContainer/>

    </>
  )
}

export default InvoiceDetail