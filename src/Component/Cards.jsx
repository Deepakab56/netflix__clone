import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchVideoDetails } from '../features/Details/detailSlice';


function Cards(props) {
    const { video, isposter, platform } = props;
    const dispatch = useDispatch()
    const showdetails = () => {
        dispatch(fetchVideoDetails({ platform: platform, id: video?.id }))
    }
    return (
        <div>
            <div className="card " data-bs-toggle="modal" data-bs-target="#details-modal" onClick={showdetails}>
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/original${isposter ? video?.poster_path : video?.backdrop_path}`} alt="" width={500} />
                <div className="card-body">
                    <h5 className='card-title text-white'>{video?.name || video?.original_name || video?.title || video?.original_title}</h5>
                </div>
            </div>


        </div>
    );
}

export default Cards;