import { axiosInstance } from "../../config/axiosInstance"
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { City, Country, State } from "country-state-city";
import Selector from "../Selector";
import ErrorMessage from "../ErrorMessage";
import { CompanyFieldsValidators, ActivitiesValidators, LoginEmailValidators } from "../../utils/usefulFeatures";
import SuccessRequestModal from "./successRequestModal";
import ErrorRequestModal from "./ErrorRequestModal";
import { X } from "lucide-react"


function WarningModal({state, setState}) {

    const [isLoading, setIsloading] = useState(false)

    const [success, SetSuccess] = useState(false)
    const [error, setError] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        adress: "",
        services: ""
    })

    const {register, handleSubmit, watch, formState:{errors}, reset} = useForm({defaultValues: formData});

    const onSubmit = (data) =>{
        setIsloading(true)
        const { name, email, phone, adress, services } = data;

        axiosInstance
        .post("company/informations/", {
 
            })
        .then(function (response) {
            console.log(response);
            SetSuccess(true)
            setError(false);
            const newDatas = [...companies]
            newDatas.push(response.data)
            setCompanies(newDatas)

        })
        .catch(function (error) {
            console.log(error);
            setError(true)
            SetSuccess(false)
        });
        reset();
        setIsloading(false)
    }

    useEffect(() => {
        if (error) {
          const timeout = setTimeout(() => {
            setError(false);
          }, 5000);
    
          return () => clearTimeout(timeout);
        }
        if (success) {
            const timeout = setTimeout(() => {
                SetSuccess(false)
            }, 5000);
      
            return () => clearTimeout(timeout);
          }
    }, [error, success]);


    return (
        <>

            <SuccessRequestModal message={"Compagnie supprimée avec succès"} isSuccess={success} setSuccess={SetSuccess}/>
                    
            <ErrorRequestModal message={"Erreur Veuiller réessayer."} isError={error} setError={setError}/>

            <div className={`fixed inset-0 z-40 flex items-start px-2 sm:px-0 pt-6 justify-center bg-black bg-opacity-50 dark:bg-gray-500 dark:bg-opacity-70 ${!state && "hidden"}`}>

            <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-[#141625]">
                    <button className="absolute top-2 right-2 dark:text-gray-200" onClick={()=>{setState(false)}}>
                        <X />
                    </button>
                    <div class="p-4 md:p-5 text-center">
                        <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Etes-vous sur de vouloir supprimer la compagnie ?</h3>
                        <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Oui
                        </button>
                        <button data-modal-hide="popup-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Non</button>
                    </div>
                </div>
            </div>

                {/* <section className="max-w-md h-[32em] p-6 mx-auto bg-white rounded-md shadow-md dark:bg-[#141625] generalScrollbar overflow-y-auto relative">
                    <button className="absolute top-2 right-2 dark:text-gray-200" onClick={()=>{setState(false)}}>
                        <X />
                    </button>
                    <h1 className="text-xl font-bold capitalize text-gray-900 dark:text-gray-200">Nouvelle Compagnie</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        
                    </form>
                </section> */}

            </div>
        </>
    )
}

export default WarningModal
