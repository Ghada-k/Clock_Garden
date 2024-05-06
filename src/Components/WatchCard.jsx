const watchCard = ({imgURL, changeBigwatchImage, bigwatchImg }) => {
  
  const handleClick =() =>{
    if (bigwatchImg !== imgURL.bigwatch){
      changeBigwatchImage(imgURL.bigwatch)
    }
    
  }
  return (
    <div className={`border-2 ronded-x1
      ${bigwatchImg === imgURL
         ? "border-colal-red"
         : "border-transparent"
        } cusror-pointer max-sm:flex-1`
      }
    onClick={handleClick} >
      <div>
        <img src={imgURL.thumbnail}
         alt="watch collaction" />
      </div>
    </div>
  )
}

export default watchCard