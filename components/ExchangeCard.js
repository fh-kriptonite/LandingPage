import { useEffect, useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import { getAvailableService, exchangeService } from "../services/service_exchanger";
import { approveErc20Service, getErc20DecimalsService } from "../services/service_erc20";

export default function ExchangeCard(props) {

    const [usdt, setUsdt] = useState(0);
    const [wag, setWag] = useState(0);
    const [available, setAvailable] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    var show = props.show;
    var web3 = props.web3;
    var price = props.price;
    var account = props.account;

    useEffect(() => {
        if(web3 != null && show)
            getAvailable();
    }, [show])

    async function getAvailable() {
        try {
            const presale = await getAvailableService(web3);
            setAvailable(presale);
        } catch (error) {
            console.log("presale error: ", error);
        }
    }

    async function exchange() {
        setIsLoading(true)
        try {
            const decimal = await getErc20DecimalsService(web3, process.env.USDT_ADDRESS)
            const swap = usdt * Math.pow(10, decimal);
            await approveErc20Service(web3, swap, process.env.USDT_ADDRESS, account);
            await exchangeService(web3, swap, account);
            await props.init();
            setUsdt(0);
            setWag(0);
            setIsLoading(false);
            props.close();
        } catch (error) {
            console.log("exchange error: ", error);
            setIsLoading(false);
        }
    }

    return (
        
        <div className={`fixed top-0 left-0 right-0 z-50 ${show ? "" : "hidden"} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full flex items-center bg-gray-900/[0.5]`}>
            <div className="relative w-full h-full max-w-2xl md:h-auto mx-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-80 md:w-96 mx-auto">
                    <div className="flex items-center justify-between px-6 pt-4 rounded-t">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Exchange
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={()=>props.close()}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="px-6 py-2">
                        <div className="p-5 rounded-xl border-2">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Send</label>
                                <div className="flex gap-2 items-baseline border-b-2">
                                    <input type="number"
                                        id="input_usdt" 
                                        step="0.1"
                                        min={0}
                                        placeholder="0"
                                        className="border-0 outline-none text-gray-900 text-xl w-full px-2.5 border-transparent focus:border-transparent focus:ring-0" 
                                        value={usdt == 0 ? "" : usdt}
                                        onChange={(input)=> {
                                            var value;
                                            if(parseFloat(input.target.value)) {
                                                value = parseFloat(input.target.value)
                                            } else {
                                                value = 0;
                                            }
                                            setUsdt(value)
                                            setWag(value / price)
                                        }}/>
                                    <div className="flex items-center gap-2 w-24">
                                        <img src="/icon-usdt.svg" height={20} width={20} alt="USDT"/>
                                        <h4 className="text-sm font-semibold tracking-tight lg:text-base">
                                            USDT
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 rounded-xl border-2 mt-2 relative">
                            <div className="absolute -top-[24px] left-0 right-0 flex justify-center">
                                <BsFillArrowDownCircleFill className="w-10 h-10"/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Receive</label>
                                <div className="flex gap-2 items-center border-b-2">
                                    <input type="number" id="input_wag" 
                                        step="0.1"
                                        min="0"
                                        placeholder="0"
                                        className="border-0 outline-none text-gray-900 text-xl w-full px-2.5 border-transparent focus:border-transparent focus:ring-0" 
                                        value={wag == 0 ? "" : wag}
                                        onChange={(input)=> {
                                            var value;
                                            if(parseFloat(input.target.value)) {
                                                value = parseFloat(input.target.value)
                                            } else {
                                                value = 0;
                                            }
                                            setUsdt(value * price)
                                            setWag(value)
                                        }}/>
                                    <div className="flex items-center gap-2 w-24">
                                        <img src="/logo.png" height={20} width={20} alt="WAG"/>
                                        <h4 className="text-sm font-semibold tracking-tight lg:text-base">
                                            WAG
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 bg-gray-100 rounded-xl border-2 mt-2">
                            <div className="flex gap-2 justify-between items-baseline">
                                <h4 className="text-sm tracking-tight">
                                    Available :
                                </h4>
                                <h5 className="text-sm font-semibold tracking-tight">
                                    { available } $WAG
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center pt-2 pb-4 space-x-2 rounded-b px-5">
                        {
                            !isLoading 
                            ? <button type="button"
                                className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                onClick={()=>{
                                    exchange();
                                }}>
                                Exchange
                            </button>
                            : <button disabled type="button" class="w-full text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                </svg>
                                Loading...
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}