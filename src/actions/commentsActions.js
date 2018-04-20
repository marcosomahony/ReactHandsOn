import * as types from '../types/comments'

export function loadCommentsSuccess(comments){
    return { type: types.LOAD_COMMENTS_SUCCESS, comments }
}

export function loadCommentsFailure(){
    return { type: types.LOAD_COMMENTS_FAILURE }
}

export function loadComments(){
    return dispatch => {
        fetch('http://localhost:3010/comments')
        .then(response => response.json())
        .then(comments => {
            dispatch(loadCommentsSuccess(comments))
        })
        .catch(error => {
            dispatch(loadCommentsFailure())
            alert('JJAJA TE JODES.')
        })
    }
}