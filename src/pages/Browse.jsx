import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchNetflixOriginal, selectNetflixOriginals } from '../features/TV/tvSlice';
import { fetchgetnowplaying, selectgetnowplaying } from '../features/Movie/movieSlice';
import Header from '../Component/Header';
import { requests } from '../utility/request';
import axios from '../utility/axios'
import Row from '../Component/Row';


function Browse(props) {
    const param = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const selector = useSelector(param.platform ==="tv" ? selectNetflixOriginals : selectgetnowplaying)

   const[genreList , setGernreList] = useState(null)

    const {data,status,error} = selector
    useEffect(() => {
        if (param.platform === "tv") {
            dispatch(fetchNetflixOriginal())
        } else if (param.platform === "movie") {
            dispatch(fetchgetnowplaying())

        }
        else {
            navigate('/browse/tv')
        }
    }, [param])

    

    //----------------------------------->
 

    const fetchGenreList=async(type)=>{
        const response =  await axios.get(requests.getGenreList(type))
        setGernreList(response.data.genres)
        
    }
    

    useEffect(()=>{
        if(param)
        {
            fetchGenreList(param.platform)
        }
    },[param])


    const random = Math.floor(Math.random() * data?.results.length);
    return (
        <>
          <Header video={data?.results[random]} platform={param.platform} />
          <div className="container-fluid">
          {
                    genreList ? genreList.map((genre) => (
                        <Row title={genre.name} platform={param.platform} isGenre={true} genreId={genre.id} />
                    )) : ""
                }
          </div>
        </>
    );
}

export default Browse;