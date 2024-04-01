import { NavLink } from "react-router-dom"
import InvoiceHeader from "../items-header/items-header"
import InvoicesList from "../invoices-list/invoices-list"
import CustomersList from "../customers-list/customers-list"
import { useState } from "react"
import { motion } from "framer-motion";


function CompanyDetails() {

    const [ isActiveButtonOneClass, setIsActivedStateOne ] = useState("bg-[#7b5df9]")
    const [ isActiveButtonTwoClass, setIsActivedStateTwo ] = useState("")

    const[ invoicesListState, setInvoicesListState] = useState(true)

    const handleButtonStateOne = () =>{
        setIsActivedStateOne("bg-[#7b5df9]")
        setIsActivedStateTwo("")
        setInvoicesListState(true)
    }

    const handleButtonStateTwo = () =>{
        setIsActivedStateOne("")
        setIsActivedStateTwo("bg-[#7b5df9]")
        setInvoicesListState(false)
    }

    const logoVariants = {
        initial: { rotate: 0 },
        animate: { rotate: 360, transition: { duration: 2 } }
    };

    const animationButtonOne = {
        moveRightAndBack: {
          x: [0, 20, 0],
          transition: {
            duration: invoicesListState ? 0 : 5,
            ease: "easeInOut",
            repeat: Infinity,
          },
        },
    };

    const animationButtonTwo = {
        moveRightAndBack: {
          x: [0, 20, 0],
          transition: {
            duration: invoicesListState ? 5 : 0,
            ease: "easeInOut",
            repeat: Infinity,
          },
        },
    };

    return (
    <>
        <div className="text-[#fff] pt-[1em] px-[2em] flex items-center justify-between">
            <h2 className="text-[1.3em] font-semibold text-[1.5em]">Kadea</h2>
            <motion.div initial="initial"animate="animate" variants={logoVariants}>
                <button>
                    <i class="fa-solid fa-gear text-[1.5em]"></i>
                </button>
            </motion.div>
        </div>
        <div className="grid grid-cols-[repeat(100,1fr)] px-[2em] mt-[5em]">
            <div className="col-[10_/_91]">
                <div className=" grid grid-cols-[repeat(2,1fr)] p-[0.4em] bg-[#1e213b] rounded-[10px]  gap-[1em]">
                    <NavLink className={"flex items-center rounded-[10px] p-[0.6em] text-[#fff] gap-[1em] " + isActiveButtonOneClass} onClick={handleButtonStateOne}>
                        <i class="fas fa-file-invoice text-[1.1em]"></i>
                        <p className="font-semibold text-[1.1em]">430</p>
                        <p className="text-[1.1em]">Factures</p>
                        <motion.button variants={animationButtonOne} animate="moveRightAndBack">
                            <i class="fas fa-arrow-circle-right"></i>
                        </motion.button>
                    </NavLink>
                    <NavLink className={"flex items-center rounded-[10px] p-[0.6em] text-[#fff] gap-[1em] " + isActiveButtonTwoClass} onClick={handleButtonStateTwo}>
                        <i class="fas fa-users text-[1.1em]"></i>
                        <p className="font-semibold text-[1.1em]">580</p>
                        <p className="text-[1.1em]">Clients</p>
                        <motion.button variants={animationButtonTwo} animate="moveRightAndBack">
                            <i class="fas fa-arrow-circle-right"></i>
                        </motion.button>
                    </NavLink>
                </div>

                <div>
                    {
                        invoicesListState ? <InvoicesList companyName={"Kadea"} itemsName={"Factures"} itemsNumber={"10"}/>: 
                        <CustomersList companyName={"Kadea"} itemsName={"Clients"} itemsNumber={"50"}/>
                    }
                                        
                </div>
                
            </div>
        </div>
    </>
  )
}

export default CompanyDetails