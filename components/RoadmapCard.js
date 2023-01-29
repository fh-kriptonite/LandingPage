export default function RoadmapCard(props) {

    const time = props.time;
    const items = props.items;

    return (
        <div className="px-4">
            <div className="flex items-center">
                <img src="/left-arrow.svg" height={48} width={48} className="h-12" alt="left"/>
                <h3 className="text-xl font-medium tracking-tight leading-none md:text-xl lg:text-2xl uppercase">
                    {time}
                </h3>
                <img src="/right-arrow.svg" height={48} width={48} className="h-12" alt="right"/>
            </div>
            <ul className="space-y-1 list-inside mt-4 mx-auto">
                {
                    items.map((item, index) => {
                        return (
                            <li key={index} className="flex items-center whitespace-normal">
                                {
                                    item.status 
                                    ? <svg className="w-4 h-4 mr-1.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    : <div className="w-4 h-4 mr-1.5 flex justify-center items-center"> 
                                        <div className="w-1 h-1 bg-gray-400 rounded-full"/>
                                    </div>
                                }
                                {
                                    item.label
                                }
                            </li>
                        );
                    })
                }
            </ul>

        </div>
    )
  }