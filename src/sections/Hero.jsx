import { arrowRight } from "../assets/icons"
import { bigwatch1 } from "../assets/images"
import Button from "../components/Button"
import WatchCard from "../components/WatchCard"
import { watches, statistics } from "../constans"

const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center 
    min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center
      items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red pl-5">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px]
        max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative
          z-10 pr-10 pl-2">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3 xl:bg-white 
          xl:whitespace-nowrap relative z-10 pr-6 pl-2">CLOCK GARDEN </span>
          <span className="pl-2">watches</span>
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8
          mt-6 mb-14 sm:max-w-sm pl-5 ">Discover stylish CLOCKGARDEN arrivals, quality comfort, and
            innovation for your life.
          </p>
          <Button label="Shop Now" iconUrl={arrowRight}/>
          <div className="flex justify-starts items-start flex-wrap w-full 
          mt-20 gap-16">
            {statistics.map((stat)=> (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
            ))}
          </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center
      xl:min-h-screen max-xl:py-40 bg-primary  bg-hero bg-cover bg-center">
        <img src={bigwatch1} alt="shoe collection" width={650} 
        className="object-contain relative z-10" />
        <div>
          {watches.map((watch)=>(<div key={watch}>
            <watchCard
              imgUrl={Watch} changeBigWatchImage ={()=>{}} bigWatchImg=""/>
          </div>))}
        </div>
      </div>
    </section>
  )
}

export default Hero