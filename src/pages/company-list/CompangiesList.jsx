import { useContext, useState } from "react"
import ThemeContext from "../../contexts/themesContext"
import UsersIcon from "../../icon/UsersIcon"
import UserRoundIcon from "../../icon/UserRound"
import SheetIcon from "../../icon/SheetIcon"
import { Link } from "react-router-dom"
import CompanyModalForm from "../../components/modals/companyModalForm"
import { useSelector } from "react-redux";
import CompanyCard from "../../cards/Card"

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
        <div class="flex flex-wrap mt-10 px-[1em] gap-[0.5em]">

            <CompanyCard/>
            <CompanyCard/>
            <CompanyCard/>       

        </div>

      </>
    )
  }
  
  export default CompagniesList