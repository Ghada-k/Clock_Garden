const WatchCard = ({ imgURL, changeBigWatchImage, bigWatchImg }) => {
  const handleClick = () => {
    if (bigWatchImg !== imgURL.bigWatch) {
      changeBigWatchImage(imgURL.bigwatch);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigWatchImg === imgURL.bigWatch
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 ml-4'>
        <img
          src={imgURL.thumbnail}
          alt='Watch colletion'
          width={127}
          height={103.34}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default WatchCard;