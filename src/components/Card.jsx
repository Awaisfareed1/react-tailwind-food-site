const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.img} alt={props.name} className='w-full h-32 md:h-48 object-cover' />
            <div className='m-4'>
                <span className='font-bold'>{props.desc}</span>
                <span className='block text-gray-500 text-sm'>Recipie by {props.by}</span>
            </div>
            <div className='absolute top-0 ml-2 mt-3'>
                <div className='badge flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className='uppercase ml-1'>
                        {props.timeAgo}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;