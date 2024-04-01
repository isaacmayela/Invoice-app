import { motion } from "framer-motion";


function HomeDashboard() {

    const recentInvoicesNumber = [1,2,3,4,5];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.5 } }
      };
      
    const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
    };

    return (
        <>
            <div className="text-[#fff] pt-[1em] pl-[2em]">
                <h2 className="text-[1.3em] font-semibold">Home</h2>
                <h2 className="text-[2em] font-semibold">Bonjour Jonathan,</h2>
            </div>
            <div className="text-[#fff] px-[2em] mt-[5em]">
                <div className="grid grid-cols-[repeat(100,1fr)] gap-3">
                    <div className="col-[1_/_80]">
                        <h4>Rapports</h4>
                        <div className="mt-[1em] bg-[#1e213b] rounded-[10px] p-[2em]">
                            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-[repeat(4,1fr)] gap-[2em]">
                                <motion.div variants={itemVariants} className="bg-[#7b5df9] rounded-[10px] flex items-center justify-center flex-col gap-[0.5em] py-[0.7em]">
                                    <i class="fas fa-users text-[1.3em]"></i>
                                    <p className="text-[1.3em] font-semibold">430</p>
                                    <p className="text-[1.1em] font-light">Clients</p>
                                </motion.div>
                                <motion.div variants={itemVariants} className="rounded-[10px] bg-[#282c49] flex items-center justify-center flex-col gap-[0.5em] py-[0.7em]">
                                    <i class="fa-solid fa-building text-[1.3em]"></i>
                                    <p className="text-[1.3em] font-semibold">590</p>
                                    <p className="text-[1.1em] font-light">Compagnies</p>
                                </motion.div>
                                <motion.div variants={itemVariants} className="bg-[#7b5df9] rounded-[10px] flex items-center justify-center flex-col gap-[0.5em] py-[0.7em]">
                                    <i class="fas fa-file-invoice text-[1.3em]"></i>
                                    <p className="text-[1.3em] font-semibold">670</p>
                                    <p className="text-[1.1em] font-light">Factures</p>
                                </motion.div>
                                <motion.div variants={itemVariants} className="rounded-[10px] bg-[#282c49] flex items-center justify-center flex-col gap-[0.5em] py-[0.7em]">
                                    <i class="fa-solid fa-sun text-[1.3em]"></i>
                                    <p className="text-[1.3em] font-semibold">590</p>
                                    <p className="text-[1.1em] font-light">clients</p>
                                </motion.div>
                            </motion.div>

                            <div className="mt-[2em]">

                                {
                                    recentInvoicesNumber.map((invoiceInfos, index) =>(
                                        <div className="flex items-center justify-between border-t border-solid border-[#383b54] pt-[0.8em] mb-[1em]" key={index}>
                                            <div className="flex items-center gap-[0.5em]">
                                                <i class="fas fa-file-invoice text-[0.9em] text-[rgba(255,255,255,0.8)]"></i>
                                                <p className="text-[0.9em] text-[rgba(255,255,255,0.8)]">Maquettage d'un site web de deux pages</p>
                                            </div>
                                            <div className="flex items-center gap-[0.5em]">
                                                <p className="bg-[#00ffa9] py-[0.1em] px-[1em] rounded-[30px] text-[#141625] text-[0.9em]">paid</p>
                                                <p className="text-[0.9em] text-[rgba(255,255,255,0.8)]">3 fév</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-[80_/_101]">
                        <h4>Performances</h4>
                        <div>
                            <div className="mt-[1em] bg-[#1e213b] rounded-[10px] flex-col flex items-center justify-center p-[1em]">
                                Facture payées
                                <div className="w-[100px] h-[100px] bg-[#141625] rounded-full flex items-center justify-center mt-[0.5em] conic-gradient-bg">
                                    <div className="w-[70px] h-[70px] bg-[#1e213b] rounded-full flex items-center justify-center">
                                        15%
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[1em] bg-[#1e213b] rounded-[10px] flex-col flex items-center justify-center p-[1em]">
                                Facture non-payées
                                <div className="w-[100px] h-[100px] bg-[#141625] rounded-full flex items-center justify-center mt-[0.5em] conic-gradient-bg">
                                    <div className="w-[70px] h-[70px] bg-[#1e213b] rounded-full flex items-center justify-center">
                                        15%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeDashboard