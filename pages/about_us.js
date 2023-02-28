import Navbar from "../components/Navbar";
import JoinCommunity from "../components/JoinCommunity";
import Footer from "../components/Footer";
import DeveloperCard from "../components/DeveloperCard";
import {FaQuoteRight} from "react-icons/fa"
import FaqSection from "../components/FaqSection";

export default function AboutUs(props) {

  return (
    <div>
        <Navbar/>
        {/* section 1 */}
        <div className="bg-developer h-[380px]">
            <div className="container mx-auto px-10 h-full">
                <div className="flex justify-between items-center h-full">
                    <div className="text-white md:w-2/5">
                        <FaQuoteRight size={32}/>
                        
                        <h2 className="text-lg font-light leading-none lg:text-xl mt-6">
                            Unifying global supply chain to improve service quality, equal opportunities and resources within the ecosystem
                        </h2>

                        <h4 className="text-sm font-medium tracking-tight leading-none md:text-sm lg:text-md mt-5">
                            Felix Hartantio // Founder
                        </h4>
                    </div>
                </div>
            </div>
        </div>


        {/* section 2 */}
        <div className="relative">
            <div className="absolute top-0 left-0">
                <img src="/net-graphic.png" className="w-[840px] object-cover bg-right h-full rounded-xl" alt="net graph" />
            </div>

            <div className="container mx-auto px-10 py-10 max-w-5xl">
                <h1 className="text-3xl font-medium text-center tracking-tight leading-none md:text-4xl lg:text-5xl mt-2">
                    About Us
                </h1>
                <p className="font-light text-gray-500 mt-6">
                    Wagon Network is a blockchain platform that is revolutionizing the supply chain industry. 
                    Indonesia is the first entrance, the world&apos;s fourth-largest population spread across 17,000 islands, 
                    and the country&apos;s complex demographics and geography present unique challenges in supply chain management. 
                    Wagon Network is addressing these challenges by providing a reliable and accurate information system using 
                    blockchain technology.
                </p>

                <p className="font-light text-gray-500 mt-6">
                    Wagon Network is a game-changer in the supply chain industry, providing a reliable and efficient system 
                    for transmitting information using blockchain technology. The platform is helping to improve the efficiency 
                    of logistics operations, reduce costs and risks, and offer better services to customers. With Wagon Network, 
                    logistics providers, big or small, can get the benefits of blockchain and improve their operations.
                </p>
            </div>

            <div className="container mx-auto px-10 py-10">
                <div className="block md:flex justify-center gap-20 items-center">
                    <DeveloperCard 
                        image="/person-felix.png" 
                        name="Felix Hartantio" 
                        role="Founder / CEO" 
                        description={
                            `Over 8+ years of industry experience, Software Engineer,
                            Founder and CEO of Fourcons (Construction Supply Chain startup), Ex-Appworks`
                        }
                        linkedin={"https://www.linkedin.com/in/felix-hartantio"}
                    />
                    <DeveloperCard
                        image="/person-rendy.png"
                        name="Rendy Hartono"
                        role="Co-Founder / CMO"
                        description={
                            `10+ years of experience in creative industry and marketing,
                            8+ years co-founder of digital marketing agency,
                            Ex-Indigo Telkom Startup Acceleration Program`
                        }
                        linkedin={"https://www.linkedin.com/in/rendy-hartono"}
                    />
                </div>
            </div>
        </div>

        <div className="container mx-auto px-10 py-20">
            <h1 className="text-3xl font-medium tracking-tight leading-none md:text-4xl lg:text-5xl mt-2 text-center">
                Our Partners
            </h1>
            <div className="flex flex-wrap mt-10 gap-10 justify-center">
                <img src="/partner/logo-solidproof.png" className="object-contain h-16 object-cover bg-right rounded-xl" alt="Solidproof" />
                <img src="/partner/logo-coinscope.png" className="object-contain h-16 object-cover bg-right rounded-xl" alt="Coinscope" />
                <img src="/partner/logo-coinsult.png" className="object-contain h-16 object-cover bg-right rounded-xl" alt="Coinsult" />
                <img src="/partner/logo-TeamFinance.png" className="object-contain h-16 object-cover bg-right rounded-xl" alt="TeamFinance" />
            </div>
        </div>

        <FaqSection/>

        <JoinCommunity/>

        <Footer/>

    </div>
  )
}