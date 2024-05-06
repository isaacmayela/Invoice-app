import { getRencentInvoices, formaterDate } from "../utils/usefulFeatures"

function RecentIvoices({invoices}) {

    const InvoicesList = [...invoices]

    const recentInvoicesList = getRencentInvoices(InvoicesList)

    return (
        <>
            <div className="col-span-2 bg-white rounded-md dark:bg-[#141625]">
                <div className="flex items-center justify-between p-4 border-b dark:border-[#7b5df9]">
                    <h4 className="text-lg font-semibold text-gray-500 dark:text-light dark:text-gray-200">Factures recentes</h4>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500 dark:text-gray-300 dark:text-light">Payées</span>
                        <button
                            className="relative focus:outline-none"
                        >
                            <div
                            className="w-12 h-6 transition rounded-full outline-none bg-[rgba(123,93,249,0.3)] dark:bg-[rgba(123,93,249,1)]"
                            ></div>
                            <div
                            className="absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform scale-110 rounded-full shadow-sm translate-x-0 bg-white dark:bg-primary-100 translate-x-6 bg-primary-light dark:bg-primary"
                            ></div>
                        </button>
                    </div>
                </div>
                <div className="px-[1em]">

                    {
                        recentInvoicesList.map((invoiceInfos, index) =>(
                            <div className={`flex items-center justify-between pt-[0.8em] mb-[1em] ${index !==0 && 'border-t dark:border-[#383b54]'}`} key={index}>
                                <div className="flex items-center gap-[0.5em]">
                                    <i className="fas fa-file-invoice text-[0.9em] dark:text-gray-100"></i>
                                    <p className="text-[0.9em] dark:text-gray-100">{invoiceInfos.concern}</p>
                                </div>
                                <div className="flex items-center gap-[0.5em]">
                                    <span className={`inline-flex px-2 text-xs font-semibold leading-5 text-green-800 ${invoiceInfos.paid ? "bg-green-100" :"bg-red-100"} rounded-full`}>
                                        { invoiceInfos.paid ? "Payée" :"Impayée"}
                                    </span>
                                    <p className="text-[0.9em] dark:text-gray-100 hidden md:block">{formaterDate(invoiceInfos.invoice_date_time)}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default RecentIvoices