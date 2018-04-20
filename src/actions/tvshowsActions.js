import * as types from '../types/tvshows'
import { tvShowsURL } from '../utils'

export function loadTvShowsSuccess(tvshows, page){
    return { type: types.LOAD_TVSHOWS_SUCCESS, tvshows, page }
}

export function loadTvShowsFailure(){
    return { type: types.LOAD_TVSHOWS_FAILURE }
}

export function loadTvShows(page = 1, endpoint = ''){
    console.log(tvShowsURL[endpoint](page))
    return dispatch => {
        fetch(tvShowsURL[endpoint](page))
        .then(response => response.json())
        .then(json => json.results)
        .then(tvshows => dispatch(loadTvShowsSuccess(tvshows, page)))
        .catch(error => {
            dispatch(loadTvShowsFailure())
            alert('We could not load the page at this time.')
        })
    }
}