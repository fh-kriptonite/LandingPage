import Navbar from "../components/Navbar";
import JoinCommunity from "../components/JoinCommunity";
import Footer from "../components/Footer";
import DeveloperCard from "../components/DeveloperCard";

export default function AboutUs(props) {

  return (
    <div>
        <Navbar/>
        {/* section 1 */}
        <div className="bg-developer h-[320px]">
            <div className="container mx-auto px-10 h-full">
                <div className="flex justify-between items-center h-full">
                    <div className="text-white md:w-2/5">
                        <h1 className="text-3xl font-medium tracking-tight leading-none md:text-4xl lg:text-5xl mt-4">
                            Developer Team
                        </h1>
                        
                        <h2 className="text-md font-light tracking-tight leading-none md:text-lg lg:text-xl mt-6">
                            &quot;We have the ambition, the talent and the technology to create a big innovation in supply chain&quot;
                        </h2>

                        <h4 className="text-sm font-medium tracking-tight leading-none md:text-sm lg:text-md mt-5">
                            Felix Hartantio // Co-Founder
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

        <JoinCommunity/>

        <Footer/>

    </div>
  )
}