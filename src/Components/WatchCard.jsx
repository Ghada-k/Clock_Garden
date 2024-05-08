const WatchCard = ({imgURL, changeBigWatchImage, bigWatchImg }) => {
  
  const handleClick =() =>{
    if (bigWatchImg !== imgURL.bigWatch){
      changeBigWatchImage(imgURL.bigWatch)
    }
    
  }
  return (
    <div className={`border-2 ronded-x1
      ${bigWatchImg === imgURL
         ? "border-colal-red"
         : "border-transparent"
        } cusror-pointer max-sm:flex-1`
      }
    onClick={handleClick} >
      <div className="flex justify-center items-center bg-card bg-center 
      bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgURL.thumbnail}
         alt="watch collaction"
         width={127}
         height={103}
         className="object-contain" />
      </div>
    </div>
  )
}

export default watchCard