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
            user: '', 
            content: ''
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
            return comment.movieId.includes(movieId)
        })
    }

    prepareComments = comments => {
        let filteredComments = this.filterComments(comments)
        return filteredComments
    }

    submitComment = () => {
        const {user, content, movieId} = this.state
        const {commentsActions} = this.props
        console.log(user, content)
        const comment = {
            //id ?
            username: user,
            body: content,
            movieId: movieId
        }

        //commentsAcions.submitComment
    }

    onUsernameChange = e => {
        let value = e.target.value
        this.setState({user: value})
    }

    onContentChange = e => {
        let value = e.target.value
        this.setState({content: value})
    }

    render(){
        const {comments, user, content} = this.state
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
            <div className="card">
                <div className="card-body">
                <h1>Agrega un comentario: </h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">User: </label>
                        <input type="text" className="form-control" id="user" onChange={this.onUsernameChange} placeholder="xX_CrINGe..lORd_Xx" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Comentario: </label>
                        <textarea className="form-control" rows="5" onChange={this.onContentChange} placeholder="Escriba aqui el contenido de su comentario..." id="comment"></textarea>
                    </div>
                    <button type="button" onClick={() => this.submitComment()} className="btn btn-success" >OK!</button>
                </form>
                </div>
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