import Navbar from "../components/Navbar";
import JoinCommunity from "../components/JoinCommunity";
import Footer from "../components/Footer";
import { Tooltip } from "flowbite-react";
import { BiCopy } from "react-icons/bi";
import ExchangeCard from "../components/ExchangeCard";
import { useState, useEffect, useCallback } from "react";

import { getClaimableBalanceService, getPriceService, getPresaleService, 
    getSoldService, getStartTimeService, getClaimStartTimeService, claimService } from "../services/service_exchanger";

import Web3 from "web3";
import Web3Modal from "web3modal";

export default function ICO(props) {
    const [exchangeShow, setExchangeShow] = useState(false);
    
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState("");

    const [claimable, setClaimable] = useState(0);
    const [price, setPrice] = useState(0);
    const [presale, setPresale] = useState(0);
    const [sold, setSold] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [claimStartTime, setClaimStartTime] = useState(0);

    const [isLoading, setIsLoading] = useState(false);
  
    const providerOptions = {
      /* See Provider Options Section */
    };
    
    let web3Modal
    if (typeof window !== 'undefined') {
      web3Modal = new Web3Modal({
        network: 'mainnet', // optional
        cacheProvider: true,
        providerOptions, // required
      })
    }
  
    const connect = useCallback(async function () {
      try {
        const provider = await web3Modal.connect();
  
        // Subscribe to accounts change
        provider.on("accountsChanged", (accounts) => {
          console.log("accountChange: ", accounts);
          if(accounts.length == 0) setAccount("");
          else setAccount(accounts[0])
        });
  
        // Subscribe to chainId change
        provider.on("chainChanged", (chainId) => {
          console.log("chainChanged: ", chainId);
        });
  
        // Subscribe to provider connection
        provider.on("connect", async(info) => {
          console.log("connect: ", info);
          const addresses = await web3.eth.getAccounts()
  
          setAccount(addresses[0])
        });
  
        // Subscribe to provider disconnection
        provider.on("disconnect", (error) => {
          console.log("disconnect: ", error);
          setAccount("");
        });
  
        const web3 = new Web3(provider)
        const addresses = await web3.eth.getAccounts()
  
        setWeb3(web3)
        setAccount(addresses[0])
        init(web3, addresses[0]);
      } catch (error) {
        console.log("wallet connect error: ", error)
      }
    }, [])
  
    // useEffect(() => {
    //     if (account == "") {
    //     connect()
    //   } else {
    //     init(web3, account);
    //   }
    // }, [])

    async function getClaimableBalance(web3Provider, address) {
        try {
            const claimableBalance = await getClaimableBalanceService(web3Provider, address);
            setClaimable(claimableBalance);
        } catch (error) {
            console.log("claimable balance error: ", error);
        }
    }

    async function getPrice(web3Provider) {
        try {
            const pricePerWagon = await getPriceService(web3Provider);
            setPrice(pricePerWagon);
        } catch (error) {
            console.log("price error: ", error);
        }
    }

    async function getPresale(web3Provider) {
        try {
            const presale = await getPresaleService(web3Provider);
            setPresale(presale);
        } catch (error) {
            console.log("presale error: ", error);
        }
    }

    async function getSold(web3Provider) {
        try {
            const sold = await getSoldService(web3Provider);
            setSold(sold);
        } catch (error) {
            console.log("sold error: ", error);
        }
    }

    async function getStartTime(web3Provider) {
        try {
            const startTime = await getStartTimeService(web3Provider);

            if (startTime == 0) return;

            const date = new Intl.DateTimeFormat('en-US', 
                { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'GMT' }
                ).format(startTime * 1000);

            setStartTime(date);
        } catch (error) {
            console.log("start time error: ", error);
        }
    }

    async function getClaimStartTime(web3Provider) {
        try {
            const claimStartTime = await getClaimStartTimeService(web3Provider);

            if (claimStartTime == 0) return;

            const date = new Intl.DateTimeFormat('en-US', 
                { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'GMT' }
                ).format(claimStartTime * 1000);

            setClaimStartTime(date);
        } catch (error) {
            console.log("start time error: ", error);
        }
    }

    async function claim() {
        setIsLoading(true);
        try {
            await claimService(web3, account);
            init(web3, account);
            setIsLoading(false);
        } catch (error) {
            console.log("claim error: ", error);
            setIsLoading(false);
        }
    }

    async function init(web3Provider, account) {
        try {
            await getClaimableBalance(web3Provider, account);
            await getPrice(web3Provider);
            await getPresale(web3Provider);
            await getSold(web3Provider);
            await getStartTime(web3Provider);
            await getClaimStartTime(web3Provider);
        } catch (error) {
            console.log("init error: ", error);
        }
    }

  return (
    <div>

        <ExchangeCard show={exchangeShow} close={()=>setExchangeShow(false)} web3={web3} price={price} account={account} 
            init={() => {init(web3, account)}}/>
        
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

                    <div className="w-80 md:w-96 bg-black/[0.6] my-5 rounded-xl p-5 text-center flex justify-center items-center">
                        <div>
                            <h2 className="text-base font-semibold tracking-tight md:text-lg lg:text-xl">
                                COMING SOON
                            </h2>
                            <div className="flex gap-2 justify-center items-center mt-3">
                                <img src="/logo.png" height={20} width={20} alt="WAG" />
                                <h4 className="text-sm tracking-tight lg:text-base">
                                    1 WAG = { price == 0 ? "-" : price } USDT
                                </h4>
                                <img src="/icon-usdt.svg" height={20} width={20} alt="USDT" />
                            </div>
                            <div className="flex gap-2 justify-between items-baseline mt-6">
                                <h4 className="text-base font-semibold tracking-tight lg:text-lg">
                                    Sale :
                                </h4>
                                <h5 className="text-sm tracking-tight lg:text-base">
                                    { sold } / { presale } $WAG
                                </h5>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 mt-2">
                                <div className={`bg-blue-600 h-2.5 rounded-full w-[${ sold/presale * 100 }%]`}></div>
                            </div>
                            <div className="flex gap-2 justify-between items-baseline mt-6">
                                <h4 className="text-base font-semibold tracking-tight lg:text-lg">
                                    Start :
                                </h4>
                                <h5 className="text-sm tracking-tight lg:text-base">
                                    { startTime == 0 ? "TBA" : startTime } UTC
                                </h5>
                            </div>
                            
                            {
                                (account == "")
                                ? <div className="flex justify-center mt-5">
                                    <button type="button" className="button-buy w-full" 
                                        onClick={()=>{
                                                connect()
                                            }}>
                                        Connect Wallet
                                    </button>    
                                </div>
                                : <div className="flex justify-center mt-5">
                                    {/* <Tooltip
                                        content="Coming Soon"
                                        trigger="hover"
                                    > */}
                                        <button type="button" className="button-buy w-full" onClick={()=>setExchangeShow(true)}>
                                        {/* <button type="button" className="button-buy"> */}
                                            <img src="/icon-usdt.svg" height={20} width={20} alt="USDT" />
                                            Buy with USDT
                                        </button>    
                                    {/* </Tooltip> */}
                                </div>
                            }

                            {
                                (claimable > 0) &&
                                <div className="border-t-2 mt-5 pt-5">
                                    <div className="flex gap-2 justify-between items-baseline">
                                        <h4 className="text-base font-semibold tracking-tight lg:text-lg">
                                            Claimable:
                                        </h4>
                                        <h5 className="text-sm tracking-tight lg:text-base">
                                            {claimable} $WAG
                                        </h5>
                                    </div>
                                    <h5 className="text-xs tracking-tight font-light text-right">
                                        Available at: {claimStartTime == 0 ? "TBA" : claimStartTime}
                                    </h5>
                                    {
                                        !isLoading 
                                        ? <button type="button"
                                            className="button-buy mt-4 w-full"
                                            // onClick={() => {
                                            //     claim();
                                            // }}
                                            >
                                            Claim
                                        </button>
                                        : <button disabled type="button" class="w-full button-buy mt-4">
                                            <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                            </svg>
                                            Loading...
                                        </button>
                                    }
                                </div>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="bg-black py-10">
            <img src="/pie-chart.jpg" className="mx-auto hidden md:block" alt="WAG tokenomy" />
            <img src="/pie-chart-m.jpg" className="mx-auto md:hidden" alt="WAG tokenomy" />
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
                <a href="https://etherscan.io/address/0xd50c8a17d5c4b8e2d984933C7E37e5B92d687B8D" target={"blank"}>
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
                </a>
                <a href="https://etherscan.io/address/0xd50c8a17d5c4b8e2d984933C7E37e5B92d687B8D" target={"blank"}>
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
                </a>
                <a href="https://etherscan.io/address/0xd50c8a17d5c4b8e2d984933C7E37e5B92d687B8D" target={"blank"}>
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
                </a>
            </div>
        </div>

        {/* section 6 */}
        <div className="relative">
            {/* <div className="absolute top-0 left-0">
                <img src="/net-graphic.png" className="w-[840px] object-cover bg-right h-full rounded-xl" alt="net background" />
            </div> */}
            <div className="container mx-auto px-10 py-20">
                {/* <h2 className="text-base font-bold tracking-tight md:text-lg lg:text-xl">
                    Confirmed Launchpad Listing
                </h2>
                <div className="flex flex-col md:flex-row items-center mt-4 gap-4">
                    <div className="border rounded-xl px-8 py-3 w-full md:w-auto">
                        <img src="/logo-title.png" className="h-16 mx-auto object-contain" alt="Wagon"/>
                    </div>
                </div> */}

                <h2 className="text-base font-bold tracking-tight md:text-lg lg:text-xl">
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
                                    <a href="https://etherscan.io/address/0xd50c8a17d5c4b8e2d984933C7E37e5B92d687B8D" target={"blank"}>
                                        0xd50c8a17d5c4b8e2d984933C7E37e5B92d687B8D
                                    </a>
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
                    <a href="https://github.com/solidproof/projects/blob/main/Wagon%20Network/v2_SmartContract_Audit_Solidproof_WagonNetwork.pdf" target={"blank"}>
                        <div className="border rounded-xl px-8 py-3 w-full md:w-auto">
                            <img src="/partner/logo-solidproof.png" className="h-16 mx-auto object-contain" alt="SolidProof"/>
                        </div>
                    </a>
                    <a href="https://github.com/cyberscope-io/audits/blob/main/1-wag/audit.pdf" target={"blank"}>
                        <div className="border rounded-xl px-8 py-3 w-full md:w-auto">
                            <img src="/partner/logo-coinscope.png" className="h-16 mx-auto object-contain" alt="Coinscope"/>
                        </div>
                    </a>
                    <a href="https://coinsult.net/projects/wagon-network/" target={"blank"}>
                        <div className="border rounded-xl px-8 py-3 w-full md:w-auto">
                            <img src="/partner/logo-coinsult.png" className="h-16 mx-auto object-contain" alt="Coinsult"/>
                        </div>
                    </a>
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