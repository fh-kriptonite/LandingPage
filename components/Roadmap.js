import RoadmapCard from "./RoadmapCard";
import { useState } from "react";
import {BsCaretLeftFill, BsCaretRightFill} from "react-icons/bs";

export default function Roadmap(props) {

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="bg-roadmap py-20 text-white">
            <div className="container mx-auto px-10">
                <h1 className="text-3xl font-medium tracking-tight leading-none md:text-4xl lg:text-5xl text-center">
                    Roadmap
                </h1>
                
                <p className="font-light mt-6 text-center md:w-[550px] mx-auto">
                    Roadmap items listed below are susceptible to change based on dynamics 
                    in the market and feedback and proposal from the Wagon community.
                </p>
                
                <div className="flex flex-col gap-8 md:hidden mt-10">
                    <RoadmapCard 
                        time="Phase 1"
                        items={[
                            {label: "Launch website and social communities", status: true},
                            {label: "Create token smart contract", status: true},
                            {label: "Initiate smart contract audit", status: true},
                            {label: "Launch Wagon ICO", status: false},
                        ]}
                    />
                    <RoadmapCard
                        time="Phase 2"
                        items={[
                            {label: "Launch on Uniswap", status: false},
                            {label: "Launch DeFi: Staking profit share", status: false},
                            {label: "CoinMarketcap listing", status: false},
                            {label: "CoinGecko listing", status: false}
                        ]}
                    />
                    <RoadmapCard
                        time="Phase 3"
                        items={[
                            {label: "Launch DeFi: Staking financing supply chain", status: false},
                            {label: "Expand influencer outreach", status: false},
                            {label: "Strategic partnership", status: false},
                            {label: "Global marketing push", status: false}
                        ]}
                    />
                    <RoadmapCard
                        time="Phase 4"
                        items={[
                            {label: "Development of decentralized data network", status: false},
                            {label: "Launch governance protocol", status: false},
                        ]}
                    />
                </div>

                <div className="hidden md:flex gap-2 justify-center mt-10">
                    <button type="button" className="" onClick={()=>setSelectedIndex(0)}>
                        <BsCaretLeftFill/>
                    </button>
                    <div id="carousel" className="block md:overflow-hidden">
                        <div className={`whitespace-nowrap ease-in duration-300 ${(selectedIndex == 0) ? "": "-translate-x-full lg:-translate-x-1/3"} `}>
                            <div id="carouselItem" className="mt-10 md:inline-flex items-start justify-center text-white w-full md:w-1/2 lg:w-1/3">
                                <RoadmapCard 
                                time="Phase 1"
                                    items={[
                                        {label: "Launch website and social communities", status: true},
                                        {label: "Create token smart contract", status: true},
                                        {label: "Initiate smart contract audit", status: true},
                                        {label: "Launch Wagon ICO", status: false},
                                    ]}
                                />
                            </div>
                            <div id="carouselItem" className="mt-10 md:inline-flex items-start justify-center text-white w-full md:w-1/2 lg:w-1/3">
                                <RoadmapCard
                                    time="Phase 2"
                                    items={[
                                        {label: "Launch on Uniswap", status: false},
                                        {label: "Launch DeFi: Staking profit share", status: false},
                                        {label: "CoinMarketcap listing", status: false},
                                        {label: "CoinGecko listing", status: false}
                                    ]}
                                />
                            </div>
                            <div id="carouselItem" className="mt-10 md:inline-flex items-start justify-center text-white w-full md:w-1/2 lg:w-1/3">
                                <RoadmapCard
                                    time="Phase 3"
                                    items={[
                                        {label: "Launch DeFi: Staking financing supply chain", status: false},
                                        {label: "Expand influencer outreach", status: false},
                                        {label: "Strategic partnership", status: false},
                                        {label: "Global marketing push", status: false}
                                    ]}
                                />
                            </div>
                            <div id="carouselItem" className="mt-10 md:inline-flex items-start justify-center text-white w-full md:w-1/2 lg:w-1/3">
                                <RoadmapCard
                                    time="Phase 4"
                                    items={[
                                        {label: "Development of decentralized data network", status: false},
                                        {label: "Launch governance protocol", status: false},
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                    <button type="button" className="" onClick={()=>setSelectedIndex(1)}>
                        <BsCaretRightFill/>
                    </button>
                </div>

            </div>

        </div>
    )
  }