import { useContext, useState } from "react"
import ThemeContext from "../../contexts/themesContext"
import UsersIcon from "../../icon/UsersIcon"
import UserRoundIcon from "../../icon/UserRound"
import SheetIcon from "../../icon/SheetIcon"
import { Link } from "react-router-dom"
import CompanyModalForm from "../../components/modals/companyModalForm"
import { useSelector } from "react-redux";
import CompanyCard from "../../on_work/Card"

function CompagniesList() {

    const darkMode = useSelector((state) => state.theme.value);
    const [oenCompanyForm, setOpenCompanyForm] = useState(false)

    return (
      <>        
        <div class="flex items-center justify-between px-4 py-4 border-b dark:border-b-[rgba(123,93,249,0.7)] lg:py-6 dark:border-primary-darker">
            <h1 class="text-2xl font-semibold dark:text-gray-100">Companies</h1>
            <button
            className="px-4 py-2 text-sm text-white rounded-md bg-[rgba(123,93,249,0.7)] rgba(123,93,249,0.7)] hover:bg-[rgba(123,93,249,0.9)] focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark font-semibold"
            onClick={()=>{setOpenCompanyForm(true)}}
            >
                Nouvelle compagnie
            </button>
            <CompanyModalForm isDisplayed={oenCompanyForm} setState={setOpenCompanyForm}/>
        </div>
        <div class="justify-center mt-10 px-[1em] grid grid-cols-[repeat(3,1fr)]">

            {/* on work */}

                <CompanyCard/>
                <CompanyCard/>
                <CompanyCard/>
            {/* on work */}

            {/* <div class="p-4 w-[25em]">
                <div class="flex rounded-lg h-full dark:bg-[#141625] bg-white p-8 flex-col shadow-md">
                    <div class="flex items-center mb-3">
                        <div
                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <h2 class="text-gray-700 dark:text-white text-lg font-medium">Kadea Sofware</h2>
                    </div>
                    <div class="flex flex-col justify-between flex-grow dark:text-gray-200">
                        <div>
                            <div className="flex items-center gap-[1em]">
                                <SheetIcon/>
                                <h4>8 Facture</h4>
                            </div>
                            <div className="flex items-center gap-[1em] mt-[0.5em]">
                                <UsersIcon/>
                                <h4>11 Clients</h4>
                            </div>
                            <div className="flex items-center gap-[1em] mt-[0.5em]">
                                <UserRoundIcon/>
                                <h4>10 Collaborateurs</h4>
                            </div>
                        </div>

                        <Link to={"company/details"} className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">
                            Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div> */}

            {/* <div class="p-4 w-[25em]">
                <div class="flex rounded-lg h-full dark:bg-[#141625] bg-white p-8 flex-col shadow-md">
                    <div class="flex items-center mb-3">
                        <div
                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <h2 class="text-gray-700 dark:text-white text-lg font-medium">Kadea Sofware</h2>
                    </div>
                    <div class="flex flex-col justify-between flex-grow dark:text-gray-200">
                        <div>
                            <div className="flex items-center gap-[1em]">
                                <SheetIcon/>
                                <h4>52 Facture</h4>
                            </div>
                            <div className="flex items-center gap-[1em] mt-[0.5em]">
                                <UsersIcon/>
                                <h4>18 Clients</h4>
                            </div>
                            <div className="flex items-center gap-[1em] mt-[0.5em]">
                                <UserRoundIcon/>
                                <h4>7 Collaborateurs</h4>
                            </div>
                        </div>
                        <Link to={"company/details"} className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">
                            Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div> */}

            {/* <div class="p-4 w-[25em]">
                <div class="flex rounded-lg h-full dark:bg-[#141625] bg-white p-8 flex-col shadow-md">
                    <div class="flex items-center mb-3">
                        <div
                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <h2 class="text-gray-700 dark:text-white text-lg font-medium">Kadea Sofware</h2>
                    </div>
                    <div class="flex flex-col justify-between flex-grow dark:text-gray-200">
                        <div>
                            <div className="flex items-center gap-[1em]">
                                <SheetIcon/>
                                <h4>10 Facture</h4>
                            </div>
                            <div className="flex items-center gap-[1em] mt-[0.5em]">
                                <UsersIcon/>
                                <h4>20 Clients</h4>
                            </div>
                            <div className="flex items-center gap-[1em] mt-[0.5em]">
                                <UserRoundIcon/>
                                <h4>3 Collaborateurs</h4>
                            </div>
                        </div>
                        <Link to={"company/details"} className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">
                            Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div> */}

            

        </div>

      </>
    )
  }
  
  export default CompagniesList