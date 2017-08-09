
import React from 'react';
import Gif from './Gif';
{/*label/list gifs and provide gifs for */}
{/*fill array with the individiual gifs*/}
const GifOrganiser = (props) => {
  const gif = props.gifs.map((image) => {
    return <Gif key={image.id} gif={image} />
  });

  return (
    <ul>{gif}</ul>
  );
};

export default GifOrganiser;