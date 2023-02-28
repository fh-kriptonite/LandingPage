export default function TncCard(props) {

    return (
        <div className="my-5">
            <p className='text-xl font-medium lg:text-2xl'>
                {props.title}
            </p>
            <p className='text-sm text-gray-500 font-light lg:text-md mt-2'>
                {props.label}
            </p>
        </div>
    )
  }