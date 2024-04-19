function CompanyModalForm({isDisplayed, setState}) {

    return (
        <>
            <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#7b5df9] bg-opacity-50 ${!isDisplayed && "hidden"}`}>

                <section className="w-[50%] p-6 mx-auto bg-white rounded-md shadow-md dark:bg-[#141625]">
                    <h1 className="text-xl font-bold capitalize text-gray-900 dark:text-gray-200">Nouvelle Compagnie</h1>
                    <form>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-900 dark:text-gray-200 font-medium" for="username">Nom</label>
                                <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                            </div>

                            <div>
                                <label className="text-gray-900 dark:text-gray-200 font-medium" for="emailAddress">Adresse email</label>
                                <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                            </div>

                            <div>
                                <label classNamen="text-gray-900 dark:text-gray-200 font-medium" for="password">Téléphone</label>
                                <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                            </div>

                            <div>
                                <label className="text-gray-900 dark:text-gray-200 font-medium" for="passwordConfirmation">Ville</label>
                                <input id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 mt-4">
                            <label className="text-gray-900 dark:text-gray-200 font-medium" for="passwordConfirmation">Adrèsse</label>
                            <input id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>

                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-900 dark:text-gray-200 font-medium" for="passwordConfirmation">Activités</label>
                                <textarea id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-900 dark:text-gray-200">
                                    Logo
                                </label>
                                <div className="mt-1 flex justify-center px-6 pt-[0.5em] pb-[0.5em] border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span className="">Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                                            </label>
                                            {/* <p className="pl-1 text-white">or drag and drop</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row-reverse p-3">
                            <div class="flex-initial pl-3">
                                <button type="button" class="flex items-center jusitify-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-[rgba(123,93,249,0.9)] hover:bg-[rgba(123,93,249,0.7)] focus:bg-[rgba(123,93,249,0.7)] dark:bg-[rgba(123,93,249,0.7)] rounded-md dark:hover:bg-[rgba(123,93,249,0.9)] focus:outline-none dark:focus:bg-[rgba(123,93,249,0.9)] transition duration-300 transform active:scale-95 ease-in-out"
                                    onClick={()=>{setState(false)}}
                                >
                                    <span class="pl-2 mx-1">Enregister</span>
                                </button>
                            </div>
                            <div class="flex-initial">
                                <button type="button" class="flex items-center px-5 py-2.5 font-medium tracking-wide text-black dark:text-gray-200 capitalize rounded-md  hover:bg-red-200 dark:hover:bg-red-300 hover:fill-current hover:text-red-600 dark:hover:text-red-700  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
                                    onClick={()=>{setState(false)}}
                                >
                                    <span class="pl-2 mx-1">Annuler</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </section>





                {/* <div className="mx-auto shadow-xl rounded-md bg-white max-w-md">

                    <div className="flex justify-end p-2">
                        <button onClick={()=>{setState(false)}}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                    <div class="p-6 pt-0 text-center">
                        <svg className="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">Are you sure you want to delete this user?</h3>
                        <button 
                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
                            onClick={()=>{setState(false)}}
                        >
                            Ajouter
                        </button>

                        <button 
                            className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                            onClick={()=>{setState(false)}}
                        >
                            Annuler
                        </button>
                    </div>

                </div> */}
            </div>
        </>
    )
}

export default CompanyModalForm
