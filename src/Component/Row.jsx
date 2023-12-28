import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Cards from "./Cards";
import { requests } from "../utility/request";
import axios from "../utility/axios";
import { shuffleArray } from "../utility/shuffleArray";

function Row(props) {
  const { title, selector, action, isposter, platform, isGenre, genreId } =
    props;

  const collection = useSelector(!isGenre ? selector : () => {});
  const [genreData, setGenreData] = useState(null);

  const dispatch = useDispatch();

  const fetchVideoByGenre = async (type, id) => {
    const response = await axios.get(requests.getByGenre(type, id));
    setGenreData(shuffleArray(response.data?.results));
  };


  
  useEffect(() => {
    if (!isGenre) {
      dispatch(action());
    } else {
      fetchVideoByGenre(platform, genreId);
    }
  }, [isGenre]);

  return (
    <div>
      <h1 className="ms-2">{title}</h1>
      <Swiper
        spaceBetween={5}
        slidesPerView={4}
        modules={[Navigation]}
        navigation
      >
        {
            !isGenre ? 
            collection.data?.results.map((movie) => {
                return (
                  <SwiperSlide>
                    <Cards video={movie} isposter={isposter} platform={platform} />
                  </SwiperSlide>
                );
              })
              
              :
               genreData?.map((movie,index) => (

                index < 4 ?
               
                 <SwiperSlide key={movie.id}>
                        <Cards video={movie} isPoster={isposter} platform={platform} />
                    </SwiperSlide>
                    :
                    " "
                
               ))

        }
       
      </Swiper>
    </div>
  );
}

export default Row;
