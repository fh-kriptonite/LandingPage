import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

export default function JoinCommunity(props) {

    return (
        <div className="bg-gray-900 text-white">
            <div className="container mx-auto px-10 py-16">
                
                <div className="block sm:flex gap-10 items-center">
                    <div className="flex-auto sm:w-1/2">
                        <div className="block md:flex justify-center items-center gap-10 md:divide-x">
                            
                            <img src="/Wagon-White-h.png" className="md:w-1/3 pb-8 mx-auto" alt="wagon white logo" />
                            
                            <div className="mx-auto md:pl-10">
                                <h1 className="text-xl font-medium tracking-tight leading-none md:text-2xl lg:text-3xl">
                                    Join our <span className="text-[#0088e2]">community</span>
                                </h1>

                                <p className="text-base font-light mt-4">
                                    Be part of a growing community of users, developers for a decentralized supply chain.
                                </p>

                                <p className="text-base font-light mt-4">
                                    Have some question?
                                </p>

                                <p className="text-base font-light flex">
                                    See 
                                    <span>
                                        <Link href="/faq" className="">
                                            <p className="text-[#0088e2] mx-1 font-semibold hover:cursor-pointer">
                                                FAQ
                                            </p>
                                        </Link>
                                    </span>
                                    and 
                                    <span>
                                        <Link href="/termsandcondition">
                                            <p className="text-[#0088e2] mx-1 font-semibold hover:cursor-pointer">
                                                Terms & Condition
                                            </p>
                                        </Link>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-auto md:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between items-start mt-10 sm:mt-0">
                        <Link href="https://t.me/wagon_network" target={"blank"}>
                            <div className="button-community">
                                <FaTelegramPlane className="text-[#0088e2]"/>
                                <div className="flex items-center gap-1">
                                    @Wagon_Network<span className="text-sm"><BsArrowUpRight/></span>
                                </div>
                            </div>
                        </Link>
                        <Link href="https://twitter.com/WagonNetwork" target={"blank"}>
                            <div className="button-community">
                                <FaTwitter className="text-[#0088e2]"/>
                                <div className="flex items-center gap-1">
                                    @WagonNetwork<span className="text-sm"><BsArrowUpRight/></span>
                                </div>
                            </div>
                        </Link>
                        <Link href="https://www.instagram.com/wagonnetwork/" target={"blank"}>
                            <div className="button-community">
                                <FaInstagram className="text-[#0088e2]"/>
                                <div className="flex items-center gap-1">
                                    @WagonNetwork<span className="text-sm"><BsArrowUpRight/></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    
                </div>
                

            </div>
        </div>
    )
  }