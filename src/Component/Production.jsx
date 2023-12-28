import React from 'react';

function Production(props) {
    const{companies} = props
  
    return (
        <div>
            <p  className="">Production Companies: {
                                        companies?.map((company) => (
                                            <span key={company?.id} className="mx-1 text-warning">{company?.name}</span>
                                        ))
                                    } </p>
            
        </div>
    );
}

export default Production;