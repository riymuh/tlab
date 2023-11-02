
const CardComponent = ({ item }: { item: any }) => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <div className="relative bg-white px-6 py-6 shadow-2xl rounded-3xl">
                    <div className="max-w-md">
                        <div className="flex flex-col gap-4 justify-between">
                            <div>
                                <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='rounded-md' alt="" />
                            </div>
                            <div>
                                <span className='text-lg'>{item.title}</span>
                            </div>
                            <div>{item.description}</div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-gray-400 text-sm'>Platform</span>
                                    <span>PC Windows</span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-gray-400 text-sm'>Release Date</span>
                                    <span>2022-10-11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardComponent