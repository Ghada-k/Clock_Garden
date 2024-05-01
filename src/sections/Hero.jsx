import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { statistics } from "../constans"

const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center 
    min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center
      items-start w-full max-xl:padding-x pt-28">
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>CLOCKGARDEN watches</span>
          </h1>
          <p>Discover stylish CLOCKGARDEN arrivals, quality comfort, and
            innovation for your life.
          </p>
          <Button label="Shop Now" iconUrl={arrowRight}/>
          <div className="flex justify-starts items-start flex-wrap w-full 
          mt-20 gap-16">
            {statistics.map((stat)=> (
              <div key={stat.label}>
                <p>{stat.value}</p>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Hero