import * as types from '../types/comments'
import initialState from './initialState'

export default function commentsReducer(state = initialState.comments, action){
    switch(action.type){
        case types.LOAD_COMMENTS_SUCCESS:
            return action.comments
        default:
            return state

  }
}