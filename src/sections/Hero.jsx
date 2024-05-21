import { useState } from "react";
import { watches, statistics } from "../constants";
import { Button, WatchCard } from "../components";
import { bigWatch1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigWatchImg, setBigWatchImg] = useState(bigWatch1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-12'>
        <p className='text-xl font-montserrat  text-coral-red mt-5 ml-5'>
          Our Summer collections
        </p>

        <h1 className='mt-8 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3 xl:whitespace-nowrap relative z-10 xl:pr-6 pb-2 xl:bg-white'> CLOCK GARDEN</span> watches
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 ml-5 mt-6 mb-14 sm:max-w-sm'>
             Discover stylish CLOCKGARDEN arrivals, quality and
             innovation for your life.
        </p>

        <div className="ml-5">
          <Button label="Shop Now" iconUrl={arrowRight}/>

          </div>

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>

        <img
          src={bigWatchImg}
          alt='Watch colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {watches.map((image, index) => (
            <div key={index}>
              <WatchCard
                index={index}
                imgURL={image}
                changeBigWatchImage={(Watch) => setBigWatchImg(Watch)}
                bigWatchImg={bigWatchImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

