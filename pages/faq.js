import Navbar from "../components/Navbar";
import faqJson from "../public/faq.json";
import JoinCommunity from "../components/JoinCommunity";
import Footer from "../components/Footer";
import FaqCard from "../components/FaqCard";

export default function Faq(props) {

  return (
    <div>
      <Navbar/>

      <div className="container mx-auto px-10 py-8 max-w-5xl">    
        <h1 className="text-3xl font-medium tracking-tight leading-none md:text-4xl lg:text-5xl mt-2 text-center my-4">
            FAQ
        </h1>

        {
            faqJson.map((faq, index) => {
                return (
                    <div key={index} className="border-b-2">
                        <FaqCard 
                            open={faq.open}
                            title={faq.title} 
                            label={faq.label}
                        />
                    </div>
                )
            })
        }
      </div>

      <JoinCommunity/>

      <Footer/>

    </div>
  )
}