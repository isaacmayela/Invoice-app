import "./invoice-actions.css"
import ActionButton from "../action-button/action-button"

function InvoiceActions() {

    return (
      <>
        <div className="detail-header">
            <div className="actions">
                <div className="statut">
                    <p>Statue</p>
                    <div className="badge">
                        <div className="badge-point"></div>
                        <h5>Pending</h5>
                    </div>
                </div>
                <div className="button-actions">
                    <ActionButton text={"Edit"} style={"btn-white"}/>
                    <ActionButton text={"Delete"} style={"btn-red"}/>
                    <ActionButton text={"Mark as Paid"} style={"btn-violet"}/>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default InvoiceActions