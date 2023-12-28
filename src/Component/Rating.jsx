import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as starRegular } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dateFormat } from '../utility/Dateformat';




function Rating(props) {
    const{vote_average , vote_count ,date , runtime} = props
const average = vote_average/2

const strarr = [...Array(5)]
// console.log(strarr)

// console.log(average)
    return (
        <div>
            <div className=" d-flex gap-2 py-2">
                <div className="d-flex text-warning" >
                    {
                        strarr.map((item , index)=>(
                            average>index+1
                            ?
                            <FontAwesomeIcon className='text-warning' icon={faStar} />
                            :
                            <FontAwesomeIcon icon={starRegular} />
                        ))
                    }
                     </div>
                <p className="mb-0 text-white"> {vote_count}</p>
                <p className='text-text'> ({ date ? `${dateFormat(date)}` : ""})</p>
                <p className='text-warning'>{runtime }</p>

                <p></p>
            </div>
        </div>
    );
}

export default Rating;