import Navbar from "../components/Navbar";
import HowItWorks from "../components/HowItWorks";
import JoinCommunity from "../components/JoinCommunity";
import Footer from "../components/Footer";
import Roadmap from "../components/Roadmap";
import { Tooltip } from "flowbite-react";
import FaqSection from "../components/faqSection";

export default function Home(props) {

  return (
    <div>
        <Navbar/>
        {/* section 1 */}
        <div className="bg-header h-[550px] 2xl:h-[600px]">
            <div className="container mx-auto px-10 h-full">
                <div className="flex justify-between items-center h-full">
                    <div className="text-white md:w-1/2">
                        <h2 className="text-md font-extralight tracking-tight leading-none md:text-lg lg:text-xl">
                            STAKING IN SUPPLY CHAIN BUSINESS
                        </h2>
                        <h1 className="text-3xl font-medium tracking-tight leading-none md:text-4xl lg:text-5xl mt-4">
                            Where anyone can become an investor 
                            and change maker in 
                            the supply chain industry
                        </h1>
                        <h2 className="text-md font-extralight tracking-tight leading-none md:text-lg lg:text-xl mt-4">
                            Minimum amount of investment and earn staking rewards
                        </h2>
                        <div className="flex flex-col md:flex-row gap-2 mt-5">
                            <a href="/Whitepaper_Wagon.pdf" target={"blank"}>
                                <button type="button" className="button-white">
                                    Whitepaper
                                </button>
                            </a>
                            <a href="https://t.me/wagon_network" target={"blank"}>
                                <button type="button" className="button-white">
                                    Claim Whitelist
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* section 2 */}
        <div>
            <div className="container mx-auto py-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex-1 order-last md:order-first">
                        <img src="/mobile3.png" className="h-[36rem] md:h-[42rem] mx-auto rounded-xl" alt="dApps wagon" />
                    </div>
                    <div className="flex-1 mt-10 px-10">
                       <h5 className="text-md font-medium text-[#0088e2] tracking-tight leading-none md:text-md lg:text-lg">
                            DECENTRALIZED SUPPLY CHAIN
                        </h5>
                        <h1 className="text-3xl font-medium tracking-tight leading-none md:text-4xl lg:text-5xl mt-2">
                            Wagon Network
                        </h1>
                        <p className="font-light text-gray-500 mt-6">
                            Wagon is a bridge between worlds of supply chain and blockchain technology. 
                            We believe that blockchain can solve the fragmented, 
                            disconnected and untrustworthy supply chain situations.
                        </p>
                        <p className="font-light text-gray-500 mt-2">
                            As it’s challenging to hook traditional businesses such as supply chain to blockchain, 
                            a decentralized finance system based on profit share is prepared.
                        </p>

                        <h5 className="text-md font-medium text-[#0088e2] tracking-tight leading-none md:text-md lg:text-lg mt-10">
                            DECENTRALIZED FINANCE
                        </h5>
                        <h1 className="text-3xl font-medium tracking-tight leading-none md:text-4xl lg:text-5xl mt-2">
                            Staking Profit Share
                        </h1>
                        <p className="font-light text-gray-500 mt-6">
                            The Wagon platform features a staking platform that rewards stakers with a share of profits from our supply chain partner companies. 
                            The WAG Token will be used as a staking reward for individuals who contribute to the growth of the network. 
                            Stakers will receive monthly rewards that will be automatically compounded unless withdrawn. 
                        </p>

                        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col md:flex-row gap-5 items-center mt-8 p-5 rounded-xl justify-center">
                            <h5 className="text-lg font-medium text-white">
                                Get your access now
                            </h5>
                            <a href="https://t.me/wagon_network" target={"blank"}>
                                <button type="button" className="button-white">
                                    CLICK HERE
                                </button>    
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        {/* section 3 */}
        <div className="hidden sm:block">
            <div className="container mx-auto px-10 py-10">
                <div className="flex justify-center items-center h-72 md:h-96 gap-4">
                    <div className="flex-1 h-full relative">
                        <img src="/trucks.jpg" className="object-cover bg-right h-full rounded-xl" alt="Land Logistics" />
                    </div>
                    <div className="flex-1 h-full relative">
                        <img src="/ship.jpg" className="object-cover h-full w-full rounded-xl" alt="Sea Logistics" />
                    </div>
                    <div className="flex-1 h-full relative">
                        <img src="/plane.jpg" className="object-cover h-full rounded-xl" alt="Air Logistics" />
                    </div>
                </div>
            </div>
        </div>

        {/* section 5 */}
        <div className="bg-gray-100">
            <div className="container mx-auto px-10 py-20">

                <div className="overflow-x-auto relative">
                    <table className="w-full text-sm text-left text-gray-500 text-center">
                        <thead className="text-md text-gray-700">
                            <tr className="bg-gray-100">
                                <th scope="col" className="">
                                    <h1 className="text-2xl font-medium tracking-tight leading-none md:text-3xl lg:text-4xl">Key Features</h1>
                                </th>
                                <th scope="col" className="px-6 w-64 bg-gray-300 rounded-t-xl text-xl font-bold py-6 border-b">
                                    Wagon DeFi
                                </th>
                                <th scope="col" className="px-6 w-64 text-xl font-bold py-6 border-b">
                                    Common DeFi
                                </th>
                                <th scope="col" className="px-6 w-64 text-xl font-bold py-6 border-b">
                                    Traditional Finance
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-100 border-b">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Backed by real business
                                </th>
                                <td className="py-4 px-6 bg-gray-300">
                                    <img src="/accept.png" className="w-6 mx-auto" alt="tick"/>
                                </td>
                                <td className="py-4 px-6">
                                    <img src="/close.png" className="w-6 mx-auto" alt="cross"/>
                                </td>
                                <td className="py-4 px-6">
                                    <img src="/accept.png" className="w-6 mx-auto" alt="tick"/>
                                </td>
                            </tr>
                            <tr className="bg-gray-100 border-b">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Liquidity
                                </th>
                                <td className="py-4 px-6 bg-gray-300">
                                    <img src="/accept.png" className="w-6 mx-auto" alt="tick"/>
                                </td>
                                <td className="py-4 px-6">
                                    <img src="/accept.png" className="w-6 mx-auto" alt="tick"/>
                                </td>
                                <td className="py-4 px-6">
                                    <img src="/close.png" className="w-6 mx-auto" alt="cross"/>
                                </td>
                            </tr>
                            <tr className="bg-gray-100 border-b">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Decentralization
                                </th>
                                <td className="py-4 px-6 bg-gray-300">
                                    <img src="/accept.png" className="w-6 mx-auto" alt="tick"/>
                                </td>
                                <td className="py-4 px-6">
                                    <img src="/accept.png" className="w-6 mx-auto" alt="tick"/>
                                </td>
                                <td className="py-4 px-6">
                                    <img src="/accept.png" className="w-6 mx-auto" alt="tick"/>
                                </td>
                            </tr>
                            <tr className="bg-gray-100 border-b">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Democratization
                                </th>
                                <td className="py-4 px-6 bg-gray-300">
                                    <img src="/accept.png" className="w-6 mx-auto" alt="tick"/>
                                </td>
                                <td className="py-4 px-6">
                                    <img src="/accept.png" className="w-6 mx-auto" alt="tick"/>
                                </td>
                                <td className="py-4 px-6">
                                    <img src="/close.png" className="w-6 mx-auto" alt="cross"/>
                                </td>
                            </tr>
                            <tr className="bg-gray-100 border-b">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Transparency
                                </th>
                                <td className="py-4 px-6 bg-gray-300">
                                    <img src="/accept.png" className="w-6 mx-auto" alt="tick"/>
                                </td>
                                <td className="py-4 px-6">
                                    <img src="/accept.png" className="w-6 mx-auto" alt="tick"/>
                                </td>
                                <td className="py-4 px-6">
                                    <img src="/close.png" className="w-6 mx-auto" alt="cross"/>
                                </td>
                            </tr>
                            <tr className="bg-gray-100 border-b">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Social impact
                                </th>
                                <td className="py-4 px-6 bg-gray-300">
                                    <img src="/accept.png" className="w-6 mx-auto" alt="tick"/>
                                </td>
                                <td className="py-4 px-6">
                                    <img src="/accept.png" className="w-6 mx-auto" alt="tick"/>
                                </td>
                                <td className="py-4 px-6">
                                    <img src="/close.png" className="w-6 mx-auto" alt="cross"/>
                                </td>
                            </tr>
                            <tr className="bg-gray-100">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Global market
                                </th>
                                <td className="py-4 px-6 bg-gray-300 rounded-b-xl">
                                    <img src="/accept.png" className="w-6 mx-auto" alt="tick"/>
                                </td>
                                <td className="py-4 px-6">
                                    <img src="/accept.png" className="w-6 mx-auto" alt="tick"/>
                                </td>
                                <td className="py-4 px-6">
                                    <img src="/close.png" className="w-6 mx-auto" alt="cross"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

        {/* section 4 */}
        <HowItWorks/>

        <Roadmap/>

        <FaqSection/>

        <JoinCommunity/>

        <Footer/>

    </div>
  )
}