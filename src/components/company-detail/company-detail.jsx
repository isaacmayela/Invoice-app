import { Link } from "react-router-dom"
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
        <div>
        <div class="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 xl:grid-cols-4">
            <div class="flex items-center justify-between p-4 bg-white rounded-md dark:bg-[#141625]">
                <div>
                    <h6
                    class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light"
                    >
                    Factures
                    </h6>
                    <span class="text-xl font-semibold dark:text-gray-300">$30,000</span>
                </div>
                <div>
                    <span>
                    <svg
                        class="w-12 h-12 text-gray-300 dark:text-primary-dark"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    </span>
                </div>
            </div>
            <div class="flex items-center justify-between p-4 bg-white rounded-md dark:bg-[#141625]">
                <div>
                    <h6
                    class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light"
                    >
                    Client
                    </h6>
                    <span class="text-xl font-semibold dark:text-gray-300">$30,000</span>
                </div>
                <div>
                    <span>
                    <svg
                        class="w-12 h-12 text-gray-300 dark:text-primary-dark"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    </span>
                </div>
            </div>
            <div class="flex items-center justify-between p-4 bg-white rounded-md dark:bg-[#141625]">
                <div>
                    <h6
                    class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light"
                    >
                    Collaborateurs
                    </h6>
                    <span class="text-xl font-semibold dark:text-gray-300">$30,000</span>
                </div>
                <div>
                    <span>
                    <svg
                        class="w-12 h-12 text-gray-300 dark:text-primary-dark"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    </span>
                </div>
            </div>
            <Link to={""} className="flex items-center justify-between p-4 bg-white rounded-md dark:bg-[#141625] hover:border hover:border-[rgba(123,93,249,0.5)] dark:hover:border-[rgba(123,93,249,1)]">
                <div>
                    <h6
                    class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light"
                    >
                    Statistiques
                    </h6>
                    <span class="text-xl font-semibold dark:text-gray-300">$30,000</span>
                </div>
                <div>
                    <span>
                    <svg
                        class="w-12 h-12 text-gray-300 dark:text-primary-dark"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    </span>
                </div>
            </Link>
        </div>
        </div>
        <div className="p-[1em]">
            <TableComponent/>
        </div>
    </>
  )
}

export default CompanyDetails