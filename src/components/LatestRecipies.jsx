import Card from "./Card";
import stewImg from '../assets/images/stew.jpg';
import curry from '../assets/images/curry.jpg';
import noodles from '../assets/images/noodles.jpg';
const LatestRecipies = () => {
    return (
        <div className='my-4'>
            <h4 className='font-bold text-center mb-3'>Latest Recipies</h4>
            <div className='grid grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <Card img={stewImg} desc="5 bean chilli Stew" by="Awais" timeAgo="25 Mins" />
                <Card img={curry} desc="1 Bowl of Curry" by="Ali" timeAgo="18 Mins" />
                <Card img={noodles} desc="1 Bowl of Noodles" by="Ahmed" timeAgo="9 Mins" />
            </div>
        </div>
    )
}

export default LatestRecipies;