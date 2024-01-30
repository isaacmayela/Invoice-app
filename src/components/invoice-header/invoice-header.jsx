import "./invoice-header.css"
import { Link } from "react-router-dom"
import UsefulFeatures from "../../utils/usefulFeatures"
import { useContext } from "react"
import FormContext from "../../contexts/displayFormContext"


function InvoiceHeader() {
    const { formState, setFormState } = useContext(FormContext);

    const handleDisplayForm = () =>{
        setFormState(true)
    }

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
                        <Link to={"#"} onClick={handleDisplayForm}>
                            <i className="fa-solid fa-plus"></i>
                            <h4>New invoice</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvoiceHeader