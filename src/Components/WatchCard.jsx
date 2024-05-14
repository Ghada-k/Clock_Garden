const WatchCard = ({ imgURL, changeBigWatchImage, bigWatchImg}) => {
  const handleClick = () => {
    if (bigWatchImg !== imgURL.bigWatch){
      changeBigWatchImage(imgURL.bigWatch);
    }
  };
  return (
    <div className={`border-2 rounded-xl
    {/* bigWatchImg === imgURL.bigWatch */}
      
      ${
        bigWatchImg === imgURL

        ? 'border-coral-red'
        : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
     onClick={handleClick}
    >
      <div className="flex justify-center items-center
      bg-card bg-center bg-cover sm:w-40 sm:h-40
      rounded-xl max-sm:p-4"
      >
        {/* <img
          src={imgURL.thumbnail}
          alt='watch colletion'
          width={127}
          height={103.34}
          className='object-contain'
        /> */}
         {imgURL && imgURL.thumbnail ? (
          <img
            src={imgURL.thumbnail}
            alt="watch collection"
            width={127}
            height={103}
            className="object-contain"
          />
        ) : (
          <div style={{ width: '127px', height: '103px' }}>
            Placeholder Image
          </div>
        )}
      </div>

    </div>
  );
};

export default WatchCard;