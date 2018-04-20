import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import * as commentsActions from '../../actions/commentsActions'

import Comment from '../../components/Comment'
import Server from '../../components/Server'

class Comments extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            comments: [],
            movieId: this.props.movieId,
            
        }
    }

    componentDidMount() {
        const { comments } = this.state
        const { commentsActions } = this.props

        commentsActions.loadComments()
    }

    componentWillReceiveProps({comments}) {
        this.setState({comments})
    }

    filterComments = comments => {
        const movieId = this.props.movieId
        return comments.filter(comment => {
            console.log('comentario: ', comment.movieId, 'policla: ', movieId,)
            return comment.movieId.includes(movieId)
        })
    }

    prepareComments = comments => {
        let filteredComments = this.filterComments(comments)
        return filteredComments
    }

    render(){
        const {comments} = this.state
        return (
            <div>
            {this.prepareComments(comments).map((comment, i) => {
                return (
                    <Comment
                        key={i}
                        {...comment}
                    />
                )
            })}
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">User: </label>
                        <input type="text" className="form-control" id="user" placeholder="xX_CrINGe..lORd..69_XX" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Comentario: </label>
                        <textarea className="form-control" rows="5" placeholder="Contenido del comentario" id="comment"></textarea>
                    </div>
                    <button type="button" className="btn btn-success" >Guardar</button>
                </form>
            </div>
            </div>
        )
    }
    
}

function mapStateToProps(state, ownProps){
    return {
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch){
    return {
        commentsActions: bindActionCreators(commentsActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)