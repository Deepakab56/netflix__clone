import React from 'react';

function Creator(props) {
    const{creator} = props
   
    return (
        <div>
            <h6 className='mt-3 text-white'>
                Creator : 
            {
                creator?.map((items)=>(
                    <span key={items.id} className="text-primary mx-1">
             
                    {
                       items?.name 
                    },
                  </span>
                ))
            }
            </h6>
           
            
        </div>
        
    );
}

export default Creator;