import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//style
import "./DetailPost.css";

class DetailPost extends Component {
      state = {
            post : {
                  title: '',
                  body : ''
            }
      }
      componentDidMount() {
            let id = this.props.match.params.id;
            axios.get(`http://localhost:3004/posts/${id}`).then(res => {          
                  let post = res.data
                  this.setState({
                        post : {   
                              title: post.title,
                              body : post.body
                        }
                  })
            })
      }

      render() {   
            return(
                  <Fragment>
                        <div className="p-detail-post">
                              <Link to="/">Home</Link>
                              <p className="detail-title">{this.state.post.title}</p>
                              <p className="detail-body">{this.state.post.body}</p>
                        </div>                                           
                  </Fragment>
            )
      }
}

export default DetailPost;