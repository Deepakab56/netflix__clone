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





  
    return (
        <div>
           
                    <>

                        
                            <div class={`ratio ratio-16x9 youtube-player ${isplay ?"vh-100" :""}  mt-4 mb-4`}>
                                <iframe src={`https://www.youtube.com/embed/${Key?.key}?rel=0&autoplay=1&mute=0`} title={`${Key?.name}`} allowfullscreen>
                                </iframe>
                               
                            </div>
                            
                      



                    </>
         



        </div>
    );
}

export default Trailer;