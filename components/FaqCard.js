import { Disclosure } from '@headlessui/react'
import { SlArrowDown } from "react-icons/sl"

export default function FaqCard(props) {

    return (
        <div className="my-5">
            <Disclosure defaultOpen={props.open}>
                <Disclosure.Button className="py-2 flex justify-between w-full items-center ">
                    <p className='text-md font-medium lg:text-lg'>
                        {props.title}
                    </p>
                    <SlArrowDown className="ui-open:rotate-180 ui-open:transform" />
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500">
                    {props.label}
                </Disclosure.Panel>
            </Disclosure>
        </div>
    )
  }