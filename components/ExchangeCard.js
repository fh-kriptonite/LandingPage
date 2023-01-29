import { useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export default function ExchangeCard(props) {

    const [usdt, setUsdt] = useState(0);
    const [wag, setWag] = useState(0);

    var show = props.show;

    return (
        
        <div className={`fixed top-0 left-0 right-0 z-50 ${show ? "" : "hidden"} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full flex items-center bg-gray-900/[0.5]`}>
            <div className="relative w-full h-full max-w-2xl md:h-auto mx-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-80 md:w-96 mx-auto">
                    <div className="flex items-center justify-between px-6 pt-4 rounded-t">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Exchange
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={()=>props.close()}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
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
                                            setWag(value * 0.1)
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
                                            setUsdt(value / 0.1)
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
                            {/* <div className="flex gap-2 justify-center items-center">
                                <img src="/logo.png" height={20} width={20} alt="WAG" />
                                <h4 className="text-sm font-semibold tracking-tight">
                                    1 WAG = 0.1 USDT
                                </h4>
                                <img src="/icon-usdt.svg" height={20} width={20} alt="USDT" />
                            </div> */}
                            <div className="flex gap-2 justify-between items-baseline">
                                <h4 className="text-sm tracking-tight">
                                    Available :
                                </h4>
                                <h5 className="text-sm font-semibold tracking-tight">
                                    15,000,000 $WAG
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center pt-2 pb-4 space-x-2 rounded-b">
                        <button type="button"
                            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Exchange
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}