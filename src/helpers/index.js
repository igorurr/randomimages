import React from 'react';

export const GetPictures = ( count ) => {
  let ret = [];
  for( let i=0; i<count; i++ )
    ret.push( <img key={i} src={'https://pp.userapi.com/c830508/v830508998/1b119e/Tu66t9UIoGg.jpg'} /> );
  return ret;
};