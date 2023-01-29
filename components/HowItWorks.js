import { useState } from "react"

export default function HowItWorks(props) {
    const [selected, setSelected] = useState(0);

    return (
        <div>
            <div className="container mx-auto py-20">
                
                <h1 className="text-3xl font-medium tracking-tight leading-none md:text-4xl lg:text-5xl text-center">
                    Here&apos;s How It Works
                </h1>

                <p className="font-light text-gray-500 mt-4 text-center px-10">
                    The Wagon dApp is a web based applications used to stake and receive profit shares rewards.
                </p>

                <div className="flex flex-col sm:flex-row justify-center mt-4 gap-10">
                    
                    <div className="w-[24rem] mx-auto sm:mx-0 order-last sm:order-first overflow-hidden">
                        <div className={`whitespace-nowrap ease-in duration-300 
                                ${
                                    (selected == 0) ? "": 
                                    (selected == 24) ? "-translate-x-[24rem]": 
                                    (selected == 48) ? "-translate-x-[48rem]": 
                                    (selected == 72) ? "-translate-x-[72rem]": "-translate-x-[96rem]"
                                }
                            `}>
                            <div className="inline-flex items-start justify-center text-white w-full">
                                <img src="/mobile0.png" className="h-[36rem] md:h-[42rem] mx-auto rounded-xl" alt="dApps normal stage" />
                            </div>
                            <div className="inline-flex items-start justify-center text-white w-full">
                                <img src="/mobile1.png" className="h-[36rem] md:h-[42rem] mx-auto rounded-xl" alt="dApps staking" />
                            </div>
                            <div className="inline-flex items-start justify-center text-white w-full">
                                <img src="/mobile2.png" className="h-[36rem] md:h-[42rem] mx-auto rounded-xl" alt="dApps locked stake" />
                            </div>
                            <div className="inline-flex items-start justify-center text-white w-full">
                                <img src="/mobile3.png" className="h-[36rem] md:h-[42rem] mx-auto rounded-xl" alt="Wagon reward" />
                            </div>
                            <div className="inline-flex items-start justify-center text-white w-full">
                                <img src="/mobile4.png" className="h-[36rem] md:h-[42rem] mx-auto rounded-xl" alt="Wagon withdraw" />
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto sm:mx-0 sm:w-96 mt-10 sm:mt-16 px-10 sm:px-0">
                        <ol className="relative border-l border-gray-400">
                            <li className="mb-10 ml-4 cursor-pointer" onClick={()=>{
                                    setSelected(0)
                                }}>
                                <div className={selected == 0 ? "active-howto" : "howto"}></div>
                                <h3 className={selected == 0 ? "active-title-howto" : "title-howto"}>
                                    Connect wallet to Wagon dApp
                                </h3> 
                                {
                                    selected == 0 &&
                                    <p className="text-base font-normal text-gray-500">
                                        Connect digital wallet such as metamask to Wagon dApps. 
                                        User WAG token balance, earned rewards and APY will be shown.
                                    </p>
                                }
                                
                            </li>
                            <li className="mb-10 ml-4 cursor-pointer" onClick={()=>{
                                    setSelected(24)
                                }}>
                                <div className={selected == 24 ? "active-howto" : "howto"}></div>
                                <h3 className={selected == 24 ? "active-title-howto" : "title-howto"}>
                                    Stake WAG token</h3>
                                {
                                    selected == 24 &&
                                    <p className="text-base font-normal text-gray-500">
                                        Users can stake and unstake WAG token using the plus and minus button on the first card.
                                        By staking tokens, users stake WAG balance will increase and shown in the card.
                                        Users can stake and unstake this balance before the lock date.
                                    </p>
                                }
                            </li>
                            <li className="mb-10 ml-4 cursor-pointer" onClick={()=>{
                                    setSelected(48)
                                }}>
                                <div className={selected == 48 ? "active-howto" : "howto"}></div>
                                <h3 className={selected == 48 ? "active-title-howto" : "title-howto"}>
                                    Staked WAG will be locked for 30 days</h3>
                                {
                                    selected == 48 &&
                                    <p className="text-base font-normal text-gray-500">
                                        Staked WAG token will be locked at 25th for a month, which we called a locked period.
                                        While the lock period start, users can stake and unstake WAG token on the new period.
                                    </p>
                                }
                            </li>
                            <li className="mb-10 ml-4 cursor-pointer" onClick={()=>{
                                    setSelected(72)
                                }}>
                                <div className={selected == 72 ? "active-howto" : "howto"}></div>
                                <h3 className={selected == 72 ? "active-title-howto" : "title-howto"}>
                                    Profit share reward</h3>
                                {
                                    selected == 72 &&
                                    <p className="text-base font-normal text-gray-500">
                                        Each 20th of the month, the Wagon team gather partners&apos; profit share 
                                        in FIAT and buy WAG token from the open market. 
                                        Stakers locked tokens denote their portion of this reward.
                                    </p>
                                }
                            </li>

                            <li className="ml-4 cursor-pointer" onClick={()=>{
                                setSelected(96)
                            }}>
                                <div className={selected == 96 ? "active-howto" : "howto"}></div>
                                <h3 className={selected == 96 ? "active-title-howto" : "title-howto"}>
                                    Auto compound and withdraw token</h3>
                                {
                                    selected == 96 &&
                                    <p className="text-base font-normal text-gray-500">
                                        Staked and rewards WAG will be automatically compounds to the next period. 
                                        To withdraw it, users need to choose the uncompound 
                                        button and put in the amount they want to withdraw. This will be turned into 
                                        uncompounded balance and can be collected after the unlock time.
                                    </p>
                                }
                            </li>
                        </ol>
                    </div>
                </div>

            </div>
        </div>
    )
  }