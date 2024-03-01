import { NavLink } from "react-router-dom"
import InvoiceHeader from "../invoice-header/invoice-header"
import InvoicesList from "../invoices-list/invoices-list"

function CompanyDetails() {

  return (
    <>
        <div className="text-[#fff] pt-[1em] px-[2em] flex items-center justify-between">
            <h2 className="text-[1.3em] font-semibold text-[1.5em]">Kadea</h2>
            <i class="fa-solid fa-gear text-[1.5em]"></i>
        </div>
        <div className="grid grid-cols-[repeat(100,1fr)] px-[2em] mt-[5em]">
            <div className="col-[10_/_91]">
                <div className=" grid grid-cols-[repeat(2,1fr)] p-[0.4em] bg-[#1e213b] rounded-[10px]  gap-[1em]">
                    <NavLink className="bg-[#7b5df9] flex items-center rounded-[10px] p-[0.6em] text-[#fff] gap-[1em]">
                        <i class="fas fa-file-invoice text-[1.1em]"></i>
                        <p className="font-semibold text-[1.1em]">430</p>
                        <p className="text-[1.1em]">Factures</p>
                    </NavLink>
                    <NavLink className="flex items-center rounded-[10px] p-[0.6em] text-[#fff] gap-[1em] justify-end">
                        <i class="fas fa-users text-[1.1em]"></i>
                        <p className="font-semibold text-[1.1em]">580</p>
                        <p className="text-[1.1em]">Clients</p>
                    </NavLink>
                </div>

                <div>
                    <InvoiceHeader/>
                    <InvoicesList/>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default CompanyDetails