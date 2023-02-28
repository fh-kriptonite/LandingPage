import Navbar from "../components/Navbar";
import tncJson from "../public/tnc.json";
import JoinCommunity from "../components/JoinCommunity";
import Footer from "../components/Footer";
import TncCard from "../components/TncCard";

export default function TermsAndContidion(props) {

  return (
    <div>
        <Navbar/>

        <div className="container mx-auto px-10 py-8 max-w-5xl">    
          <h1 className="text-3xl font-medium tracking-tight leading-none md:text-4xl lg:text-5xl mt-2 text-center my-4">
              Terms & Condition
          </h1>

          {
            tncJson.map((tnc, index) => {
                return (
                    <div key={index} className="border-b-2">
                        <TncCard 
                            title={tnc.title} 
                            label={tnc.label}
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