import FaqCard from "./FaqCard";
import faqJson from "../public/faq.json";

export default function FaqSection(props) {

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-10 py-16 max-w-5xl">
                
                <h1 className="text-3xl font-medium tracking-tight leading-none md:text-4xl lg:text-5xl mt-2 text-center my-4">
                    FAQ
                </h1>

                {
                    faqJson.map((faq, index) => {
                        if(index > 4) return;

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
        </div>
    )
  }