import React from 'react';

const ImportantVideo = () => {
  return (
    <div>
      <video controls width={"250px"} className='ms-5 mb-3' autoPlay>
        <source src="important.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default ImportantVideo;


