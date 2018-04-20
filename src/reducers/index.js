import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import movies from './moviesReducer'
import movie from './movieReducer'
import tvshows from './tvShowsReducer'
import show from './showReducer'
import comments from './commentsReducer'

const rootReducer = combineReducers({
    movies, 
    movie,
    tvshows,
    show,
    comments,
    router: routerReducer
})

export default rootReducer
