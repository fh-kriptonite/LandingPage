import { FaTelegramPlane, FaLinkedin } from "react-icons/fa";

export default function DeveloperCard(props) {

    return (
        <div className="w-76 md:w-80 pt-32 mx-auto md:mx-0 mt-4 md:mt-0">
            <div className="p-5 bg-gray-200 rounded-xl relative pt-28">
                <div className="absolute inset-x-0 -top-32 z-2">
                    <img src={props.image} className="h-64 mx-auto" alt="Felix"/>
                </div>
                <h4 className="text-md font-medium text-center tracking-tight leading-none lg:text-lg mt-2">
                    {props.name}
                </h4>
                <h5 className="text-base font-medium text-gray-500 text-center tracking-tight leading-none lg:text-md">
                    {props.role}
                </h5>
                <p className="text-sm text-center font-light text-gray-500 mt-4">
                    {props.description}
                </p>
                <div className="flex gap-4 justify-center mt-4 h-8">
                    {
                        props.telegram &&
                        <a href={props.telegram} target={"blank"}>
                            <FaTelegramPlane className="text-blue-600 hover:text-blue-800 w-6 h-6"/>
                        </a>
                    }
                    {
                        props.linkedin &&
                        <a href={props.linkedin} target={"blank"}>
                            <FaLinkedin className="text-blue-600 hover:text-blue-800 w-6 h-6"/>
                        </a>
                    }
                </div>
            </div>
        </div>
    )
  }