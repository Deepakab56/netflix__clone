import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadervideo, selectheadervideo } from "../features/Common/commonSlice";
import Trailer from "./Trailer";
import Genre from "./Genre";
import { fetchVideoDetails } from "../features/Details/detailSlice";
import Creator from "./Creator";




function Header(props) {
    const {video , platform} = props
    const {data,status,error} = useSelector(selectheadervideo)
    const[isPlay,setIsplay]=useState(false)
    console.log(data)
const dispatch = useDispatch()

useEffect(()=>{

  if(video)
  {
    dispatch(fetchHeadervideo({platform :platform , id:video?.id}))
  }

},[video])


const playtrailer =()=>{
  setIsplay(true)
}


const showdetails = () => {
  dispatch(fetchVideoDetails({ platform: platform, id: video?.id }))
}
  return (
    <div className="position-relative vh-100">
      {
 !isPlay ?
      <>
      <img className="header-img" src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} alt="" />

      <div className="caption">
        <h1 className="title display-2">{data?.name || data?.original_name || data?.title || data?.original_title}</h1>
        <p className="fs-6 mt-2">{data?.tagline || data?.overview}</p>
        <Rating vote_average={data?.vote_average} vote_count={data?.vote_count} date={data?.first_air_date ? data?.first_air_date : data?.release_date} />
        <Genre genreList={data?.genres} platform={platform} />
      
       
        <div className="btn btn-warning mt-4" onClick={showdetails} data-bs-toggle="modal" data-bs-target="#details-modal">More Info</div>
        <div className="btn btn-primary mt-4 mx-2" onClick={playtrailer}>Play</div>
        <Creator creator={data?.created_by}/>

       
   
      </div>
      </>
    :
    <Trailer videolist ={data?.videos?.results} isplay={true}/>
      }
      <div className="header-vignette"> </div>
      <div className="header-bottom-vignette"></div>
    </div>
  );
}

export default Header;
