import "./invoice-header.css"
function InvoiceHeader() {

  return (
    <>
        <div className="invoices-header">
            <div className="invoices-titles">
                <h1>Invoices</h1>
                <p>There are 7 total invoices</p>
            </div>
            <div className="new-invoice">
                <div className="filter">
                    <h4>Filter by status</h4>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </div>
                <div className="new-invoice-button">
                    <a href="#">
                        <ion-icon name="add-outline"></ion-icon>
                        <h4>New invoice</h4>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default InvoiceHeader