import React from 'react';

const Gif = (image) => {
  return (
    <li className='gifcss'>
      <img  src={image.gif.images.downsized.url} />
    </li>
  )
};

export default Gif;

{/*fat arrows inherit this*/}