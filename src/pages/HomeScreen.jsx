import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNetflixOriginal,
  selectNetflixOriginals,
} from "../features/TV/tvSlice";
import Header from "../Component/Header";
import Row from "../Component/Row";
import { fetchgetnowplaying, selectgetnowplaying } from "../features/Movie/movieSlice";
import { platformType } from "../utility/request";
function HomeScreen(props) {
  const dispatch = useDispatch();
  

  const netflixTv = useSelector(selectNetflixOriginals);
  const { status, data, error } = netflixTv;

  useEffect(() => {
    dispatch(fetchNetflixOriginal());
  }, []);


      const random = Math.floor(Math.random() * data?.results.length);
      
   

  return (
    <>
     {
        data ?
        <Header video={data.results[random]} platform={platformType.tv} />
        :
        ""
     }
     
     <Row title={"Now Playing"} selector={selectgetnowplaying} action={fetchgetnowplaying} isposter={true}  platform={platformType.movie}/>
     <Row title={"Tv"} selector={selectNetflixOriginals} action={fetchNetflixOriginal} platform= {platformType.tv} />
    
    </>
  );
}

export default HomeScreen;
