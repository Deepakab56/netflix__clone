const API_KEY ='e610928a59c1a65a2c1ff4a420683195'

 export const requests ={
    getNetflixOriginal : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getnowplaying : (platform,endpoint) => `/${platform}/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    getdetails : (requestValue)=>`/${requestValue.platform}/${requestValue.id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
    getGenreList: (platform) => `genre/${platform}/list?api_key=${API_KEY}`,
    getByGenre: (request) => `/discover/${request.platform}?api_key=${API_KEY}&with_genres=${request.id}&language=en-US&page=${request.counter}`,
    getBySearch: (platform ,querry) => `/discover/${platform}?api_key=${API_KEY}&querry=${querry}&language=en-US&page=1`
}


export const platformType ={
    movie :"movie",
    tv : "tv"

}

export const  endpoints ={
    popular :"poplular",
    now_playing:"now_playing",
    top_rated:"top_rated",
    upcoming :"upcoming",
    airing_today:"airing_today",
    on_the_air:"on_the_air"

}