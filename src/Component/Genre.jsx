import React from 'react';
import { Link } from 'react-router-dom';

function Genre(props) {
    const {genreList,platform} = props
    return (
      
        <>
        <div className="d-flex">
           {
              genreList?.map((items)=>(
                <Link key={items.id} to={`/browse/${platform}/${items.id}`}  className="btn btn-warning m-1">
                  {items?.name}
                </Link>
              ))
           }
        </div>
            
        </>
    );
}

export default Genre;