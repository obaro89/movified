import React from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs'

const Like = ({movie, handleLike}) => {
    // let classes = ''
    // {classes = movie.like ? <BsHeart/> : <BsHeartFill/>}
    return movie.like ? <BsHeartFill onClick={handleLike} style={{cursor: 'pointer'}}/> : <BsHeart onClick={handleLike} style={{cursor: 'pointer'}}/>
}
 
export default Like;