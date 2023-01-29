import Navbar from "../components/Navbar";
import JoinCommunity from "../components/JoinCommunity";
import Footer from "../components/Footer";
import { Tooltip } from "flowbite-react";
import { BiCopy } from "react-icons/bi";
import ExchangeCard from "../components/ExchangeCard";
import { useState } from "react";

export default function ICO(props) {
    const [exchangeShow, setExchangeShow] = useState(false);
    
  return (
    <div>

        <ExchangeCard show={exchangeShow} close={()=>setExchangeShow(false)}/>
        
        <Navbar/>
        {/* section 1 */}
        <div className="bg-ico md:h-[450px] p-10">
            <div className="container m-auto h-full text-white">
                <div className="flex flex-col md:flex-row justify-between items-center h-full gap-10">
                    <div>
                        <h2 className="text-base font-medium tracking-tight md:text-lg lg:text-xl">
                            JOIN THE FUTURE
                        </h2>
                        <h1 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl mt-5">
                            Staking in Supply Chain Business
                        </h1>
                        <h4 className="text-base font-light tracking-tight lg:text-lg mt-4">
                            Minimum amount of investment and earn staking rewards
                        </h4>
                    </div>

                    <div className="w-80 md:w-96 bg-black/[0.6] h-[350px] rounded-xl p-5 text-center flex justify-center items-center">
                        <div>
                            <h2 className="text-base font-semibold tracking-tight md:text-lg lg:text-xl">
                                COMING SOON
                            </h2>
                            <div className="flex gap-2 justify-center items-center mt-3">
                                <img src="/logo.png" height={20} width={20} alt="WAG" />
                                <h4 className="text-sm tracking-tight lg:text-base">
                                    1 WAG = 0.1 USDT
                                </h4>
                                <img src="/icon-usdt.svg" height={20} width={20} alt="USDT" />
                            </div>
                            <div className="flex gap-2 justify-center items-baseline mt-6">
                                <h4 className="text-base font-semibold tracking-tight lg:text-lg">
                                    Public Sale :
                                </h4>
                                <h5 className="text-sm tracking-tight lg:text-base">
                                    0 / 15,000,000 $WAG
                                </h5>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 mb-4 dark:bg-gray-700 mt-2">
                                <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-[0%]"></div>
                            </div>
                            <h4 className="text-base font-semibold tracking-tight lg:text-lg">
                                Sale start TBA
                            </h4>
                            <h5 className="text-sm tracking-tight lg:text-base mt-2">
                                Listing price 1 WAG = 0.1 USDT
                            </h5>
                            <div className="flex justify-center mt-6">
                                <Tooltip
                                    content="Coming Soon"
                                    trigger="hover"
                                >
                                    {/* <button type="button" className="button-buy" onClick={()=>setExchangeShow(true)}> */}
                                    <button type="button" className="button-buy">
                                        <img src="/icon-usdt.svg" height={20} width={20} alt="USDT" />
                                        Buy with USDT
                                    </button>    
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="bg-black py-10">
            <img src="/pie-chart.jpg" className="mx-auto hidden md:block" alt="WAG tokenomy" />
            <img src="/pie-chart-m.jpg" className="mx-auto md:hidden" alt="WAG tokenomy" />
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
                <div className="flex bg-gradient-to-b from-teal-900 to-teal-600 rounded-xl p-5 items-center gap-4 w-80">
                    <img src="/circle-eth.png" className="h-16" alt="ETH" />
                    <div>
                        <h4 className="text-base text-cyan-600 tracking-tight lg:text-lg">
                            NETWORK
                        </h4>
                        <h4 className="text-lg text-white lg:text-xl">
                            Ethereum (ERC20)
                        </h4>
                    </div>
                </div>
                <div className="flex bg-gradient-to-b from-teal-900 to-teal-600 rounded-xl p-5 items-center gap-4 w-80">
                    <img src="/circle-wag.png" className="h-16" alt="WAG" />
                    <div>
                        <h4 className="text-base text-cyan-600 tracking-tight lg:text-lg">
                            TOTAL SUPPLY
                        </h4>
                        <h4 className="text-lg text-white lg:text-xl">
                            100,000,000
                        </h4>
                    </div>
                </div>
                <div className="flex bg-gradient-to-b from-teal-900 to-teal-600 rounded-xl p-5 items-center gap-4 w-80">
                    <img src="/circle-blockchain.png" className="h-16" alt="Address" />
                    <div className="overflow-hidden">
                        <h4 className="text-base text-cyan-600 tracking-tight lg:text-lg">
                            WAG ADDRESS
                        </h4>
                        <h4 className="text-lg text-white lg:text-xl text-ellipsis overflow-hidden">
                            0xd50c8a17d5c4b8e2d984933C7E37e5B92d687B8D
                        </h4>
                    </div>
                </div>
            </div>
        </div>

        {/* section 6 */}
        <div className="relative">
            {/* <div className="absolute top-0 left-0">
                <img src="/net-graphic.png" className="w-[840px] object-cover bg-right h-full rounded-xl" alt="net background" />
            </div> */}
            <div className="container mx-auto px-10 py-20">
                <h2 className="text-base font-bold tracking-tight md:text-lg lg:text-xl">
                    Confirmed Launchpad Listing
                </h2>
                <div className="flex flex-col md:flex-row items-center mt-4 gap-4">
                    <div className="border rounded-xl px-8 py-3 w-full md:w-auto">
                        <img src="/logo-title.png" className="h-16 mx-auto object-contain" alt="Wagon"/>
                    </div>
                    <div className="border rounded-xl px-8 py-3 w-full md:w-auto">
                        <img src="/partner/logo-pinksale.png" className="h-16 mx-auto object-contain" alt="Pinksale"/>
                    </div>
                </div>

                <h2 className="text-base font-bold tracking-tight md:text-lg lg:text-xl mt-10">
                    WAG Contract
                </h2>
                <h4 className="text-base tracking-tight md:text-base mt-2">
                    Use the contract information below to add the WAG token to your wallet.
                </h4>
                <div className="mt-4 bg-cyan-100 rounded-xl px-10 py-5">
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center md:text-left">
                        <div className="flex-initial w-full md:w-72 lg:w-96">
                            <h4 className="text-base tracking-tight font-semibold">
                                Address
                            </h4>
                            <div className="flex gap-2 items-end">
                                <h4 className="text-base font-light tracking-tight mt-1 text-ellipsis overflow-hidden ">
                                    0xd50c8a17d5c4b8e2d984933C7E37e5B92d687B8D
                                </h4>
                                <div className="h-6 text-gray-900 hover:text-gray-400 cursor-pointer" 
                                    onClick={() => {
                                        navigator.clipboard.writeText("0xd50c8a17d5c4b8e2d984933C7E37e5B92d687B8D");
                                    }}>
                                    <BiCopy/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-base tracking-tight font-semibold">
                                Decimal
                            </h4>
                            <h4 className="text-base font-light tracking-tight mt-1">
                                18
                            </h4>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-base tracking-tight font-semibold">
                                Network
                            </h4>
                            <h4 className="text-base font-light tracking-tight mt-1">
                                ETH
                            </h4>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-base tracking-tight font-semibold">
                                Token Symbol
                            </h4>
                            <h4 className="text-base font-light tracking-tight mt-1">
                                WAG
                            </h4>
                        </div>
                    </div>
                </div>
                        
                <h2 className="text-base font-bold tracking-tight md:text-lg lg:text-xl mt-10">
                    Powered By
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center mt-4 gap-4">
                    <div className="border rounded-xl px-8 py-3 w-full md:w-auto">
                        <img src="/partner/logo-solidproof.png" className="h-16 mx-auto object-contain" alt="SolidProof"/>
                    </div>
                    <div className="border rounded-xl px-8 py-3 w-full md:w-auto">
                        <img src="/partner/logo-coinscope.png" className="h-16 mx-auto object-contain" alt="Coinscope"/>
                    </div>
                    <div className="border rounded-xl px-8 py-3 w-full md:w-auto">
                        <img src="/partner/logo-coinsult.png" className="h-16 mx-auto object-contain" alt="Coinsult"/>
                    </div>
                    <div className="border rounded-xl px-8 py-3 w-full md:w-auto">
                        <img src="/partner/logo-TeamFinance.png" className="h-16 mx-auto object-contain" alt="Team finance"/>
                    </div>
                </div>

                {/* <div className="bg-gradient-to-b from-teal-900 to-teal-600 p-5 rounded-xl mt-10">
                    <div className="flex gap-2 justify-center items-center">
                        <img src="/icon-quicksale.png" className="h-10" alt="Quicksale"/>
                        <h2 className="text-lg text-cyan-300 font-semibold tracking-tight md:text-xl lg:text-2xl">
                            Don't Miss Out!
                        </h2>    
                    </div>
                    <div className="flex gap-4 justify-between items-center text-white">
                        <div>
                            <h2 className="text-lg font-semibold tracking-tight md:text-xl lg:text-2xl">
                                
                            </h2>
                        </div>

                    </div>

                </div> */}
            </div>
        </div>

    <JoinCommunity/>

    <Footer/>


    </div>
  )
}