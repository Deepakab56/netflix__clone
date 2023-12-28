import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

function Trailer(props) {
    const { videolist,isplay } = props;
    const [Key, setKey] = useState(null)
    const [isclose, setIsclose] = useState(false)


    useEffect(() => {
        if (videolist) {
            const filter = videolist.find((items) => {
                return items.type === "Trailer"
            })
            setKey(filter)

        }
    }, [videolist])





    const closeTrailer = () => {
        setIsclose(true)
    }
    return (
        <div>
            {
                !isclose ?
                    <>

                        
                            <div class={`ratio ratio-16x9 youtube-player ${isplay ?"vh-100" :""}  mt-4 mb-4`}>
                                <iframe src={`https://www.youtube.com/embed/${Key?.key}?rel=0&autoplay=1&mute=0`} title={`${Key?.name}`} allowfullscreen>
                                </iframe>
                                <div className="w-70 mt-4">
                                <button className=" btn btn-transparent w-10 h-10  position-absolute bottom-50 end-20" onClick={closeTrailer}><FontAwesomeIcon icon={faXmark} /> close</button>
                            </div>
                            </div>
                            
                      



                    </>
                    :
                    <Header />
            }



        </div>
    );
}

export default Trailer;