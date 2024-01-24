import InvoiceHeader from "../../components/invoice-header/invoice-header"
import InvoicesList from "../../components/invoices-list/invoices-list"

function Home() {

  return (
    <>
       <InvoiceHeader/>
       <InvoicesList/>
    </>
  )
}

export default Home