import React from 'react';

function Networks(props) {
    const{networks} = props
    return (
        <div >
          
            {
                
                networks?.map((item)=>(
                    <>
                  
                    <span key={item.id} className='mx-2'>
                      <img src={`https://image.tmdb.org/t/p/original${item?.logo_path}`} width={100} alt="" className='' />
                       </span>
                   
                     </>
                ))
            }
        </div>
    );
}

export default Networks;