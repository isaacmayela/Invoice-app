import "./invoices-list.css"
import Invoice from "../invoice/invoice"

function InvoicesList() {

    const list = [1,2,3,4,5,6,7,8,9,10]

    return (
        <>
            <div className="invoices-list">
                {
                    list.map((invoiceInfos, index) =>(
                        <Invoice key={index} />
                    ))
                }
            </div>
        </>
    )
}

export default InvoicesList