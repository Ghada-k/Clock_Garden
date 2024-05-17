import { star } from '../assets/icons'
const PopularProductCard = ({ imgURL, name, price, rating}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img 
          src={imgURL} 
          alt={name}
          className="w-[280px] h-[280px] rounded-[20px] " 
        />
        <div className="mt-8 flex justify-start gap-2.5">
            <img 
              src={star} 
              alt="rating" 
              width={24} 
              height={24}
            />
            <p className="font-montserrat text-xl leading-normal 
             text-Slate-gray ">{rating}</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanuin'>
            {name}</h3>
        <p className='mt-2 font-semibold font-monstserrat text-coral-red
        text-2lx leading-normal'>{price}</p>
        


    </div>
  )
}

export default PopularProductCard