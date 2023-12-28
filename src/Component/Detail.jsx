import React from "react";
import Trailer from "./Trailer";
import { useSelector } from "react-redux";
import { selectvideoDetails } from "../features/Details/detailSlice";

import Rating from "./Rating";
import Genre from "./Genre";
import Creator from "./Creator";
import Production from "./Production";
import Networks from "./Networks";


function Detail(props) {
  const selectVideo = useSelector(selectvideoDetails);

  const { data, status, error } = selectVideo;
  
  return (
    <div>
      <div className="modal" tabIndex="-1" id="details-modal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header border-bottom-0" data-bs-theme="dark">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Trailer videolist={data?.videos?.results} isplay={false} />

              <div className="py-3">
                <div className="row">
                  <div className="col-md-7">
                    <div className="py-2">
                      <h3 className="mb-0">
                        {data?.name || data?.title || data?.original_title}
                      </h3>
                    </div>
                    <div className="py-2">
                      <p className="text-warning">{data?.tagline}</p>

                      <Rating
                        vote_average={data?.vote_average}
                        vote_count={data?.vote_count}
                        date={
                          data?.first_air_date
                            ? data?.first_air_date
                            : data?.release_date
                        }
                        runtime={data?.runtime ? data?.runtime : ""}
                      />

                      <div>
                      <Genre genreList={data?.genres} />
                      <Creator creator={data?.created_by}/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                  <div className="py-2">
<Production companies={data?.production_companies}/>
                  </div>
                 
                  <div className="mb-0">
                    <Networks networks={data?.networks}/>
                  </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
