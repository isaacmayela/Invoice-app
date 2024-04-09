import TableComponent from "../TableComponents"

function CompanyDetails() {

    return (
    <>
        <div class="flex items-center justify-between px-4 py-4 border-b dark:border-b-[#7b5df9] lg:py-6">
            <h1 className="text-2xl font-semibold dark:text-gray-100">Kadea</h1>
            <button
            className="px-4 py-2 text-sm text-white rounded-md bg-[rgba(123,93,249,0.7)] hover:bg-[rgba(123,93,249,0.9)] focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark"
            >
            Nouvelle facture
            </button>
        </div>
        <div className="p-[1em]">
            <TableComponent/>
        </div>
    </>
  )
}

export default CompanyDetails