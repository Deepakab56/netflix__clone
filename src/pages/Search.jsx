import React from 'react';
import Cards from '../Component/Cards';

function Search(props) {
    return (
        <div>
            <div className="container-fluid py-5">
                <div className="r0w g-3">
                    {
                        searchData?.map((video)=>(
                            <div className="col-md-3">
                                <Cards video={video} platform={"movie"}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    );
}

export default Search;