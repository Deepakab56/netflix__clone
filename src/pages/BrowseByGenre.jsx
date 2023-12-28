import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requests } from '../utility/request';
import axios from '../utility/axios'
import Cards from '../Component/Cards';
import { shuffleArray } from '../utility/shuffleArray';


function BrowserByGenre(props) {
    const [genreData, setGenreData] = useState(null)
    const [genreList, setGernreList] = useState(null)
    const [currentType, setCurrentType] = useState(null)
    const [counter, setcounter] = useState(1)
    const param = useParams()

    const fetchVideosByGenre = async (request) => {
        const response = await axios.get(requests.getByGenre(request))
        setGenreData(response.data)
    }

    useEffect(() => {
        if (param) {
            fetchVideosByGenre({ platform: param.platform, id: param.id, counter: counter })
        }

    }, [])



    const handleChange = (e) => {
        const { value } = e.target
        fetchGenreList(value)
        setCurrentType(value)

    }

    const fetchGenreList = async (type) => {
        const response = await axios.get(requests.getGenreList(type))
        setGernreList(response.data.genres)

    }

    const handleGenre = (e) => {
        const { value } = e.target;
        fetchVideosByGenre({ platform: currentType, id: value, counter: counter });
    }


    const Nextpage = () => {
        setcounter((prev) => (
            prev += 1

        ))
        fetchVideosByGenre({ platform: param.platform, id: param.id, counter: counter });
    }
    const prevPage = () => {
       if(counter >1)
       {
        setcounter((prev) => (
            prev -= 1

        ))
        fetchVideosByGenre({ platform: param.platform, id: param.id, counter: counter });
       }
    }
    console.log(counter)
    console.log(genreData)
    return (
        <div>
            <div className="container-fluid py-5">

                <div className="d-flex  py-4 gx-3 justify-content-end">
                    <p>filter By</p>
                    <select name="" id="" className="form-select  w-auto ms-2" onChange={handleChange}>
                        <option value="" disabled selected> select platform</option>
                        <option value="tv"> TV</option>
                        <option value="movie"> Movie</option>
                    </select>

                    <select className='form-select w-auto ms-2' onChange={handleGenre}>
                        <option disabled selected>Select Genre</option>
                        {
                            genreList?.map((genre) => (
                                <option key={genre?.id} value={genre?.id} >{genre?.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="row g-3">
                    {
                        shuffleArray(genreData?.results.map((video, index) => (


                            <div key={video?.id} className='col-md-3'>
                                <Cards video={video} platform={param.platform} />
                            </div>



                        )))
                    }

                </div>
                <div className="d-flex justify-content-center mt-4">
                    <button className='btn btn-primary mx-2' onClick={prevPage}>Prev</button>
                    {
                        
                    }
                    <button className='btn btn-primary' onClick={Nextpage}>Next </button>
                </div>
            </div>
        </div>
    );
}

export default BrowserByGenre;