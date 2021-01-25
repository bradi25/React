import React, { Component, Fragment } from "react";
import Post from "../../../Component/Post/Post";
import "./BlogPost.css";
import axios from 'axios';
import API from "../../../services";

class  BlogPost extends Component {
      state = {
            post: [],
            comment: [],     
            formBlogPost: {
                  userId : 1,
                  id : 1,
                  title : '',
                  body : ''
            },
            isUpdate: false
      }

      handleClearForm = () => {
            let formBlogPostNew = {...this.state.formBlogPost};
            formBlogPostNew['id'] = 1;
            formBlogPostNew['userId'] = 1;
            formBlogPostNew['title'] = '';
            formBlogPostNew['body'] = '';

            this.setState({
                  formBlogPost : formBlogPostNew
            })
      }

      handleGetAPI = () => {
            API.defaultBlog().then(result => {
                  this.setState({
                        post: result
                  })
            })
            API.getComment().then(result => {
                  this.setState({
                        comment: result
                  })
            })       
      }


      handleRemove = (data) => {
            axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
                  this.handleGetAPI();
            })
      }

      //TODO MEMBUAT POST GLOBAL
      handlePostAPI = () => {
            axios.post('http://localhost:3004/posts', this.state.formBlogPost).then((res) => {               
                  this.handleGetAPI();
                  this.handleClearForm();
            }, (err) => {
                  console.log('error nya adalah ',err);
            });
      }

      putDataToAPI = () => {
            axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`,this.state.formBlogPost).then((res) => {
                  this.handleGetAPI();
                  this.handleClearForm();
                  this.setState({
                        isUpdate: false
                  })
            })
      }

      handleUpdate = (data) => {            
                  this.setState({
                        formBlogPost: data,
                        isUpdate: true
                  })
            }

      handleDetail = (id) => {          
            this.props.history.push(`/detail-post/${id}`);
      }

      handleSubmit = () => {
            if(this.state.isUpdate) {
                  this.putDataToAPI();
            }else {
                  this.handlePostAPI();
            }
      }

      handleFormChange = (event) => {
            let formBlogPostNew = {...this.state.formBlogPost};//mengcopy object
            let timestamp = new Date().getTime();           
            if(!this.state.isUpdate) {
                  formBlogPostNew['id'] = timestamp;
            }            
            formBlogPostNew[event.target.name] = event.target.value;          
            this.setState({
                  formBlogPost: formBlogPostNew
            })
      }

      componentDidMount() {         
            this.handleGetAPI();
      }
      render() {
            return(
                  <Fragment>
                        <p>Halaman Blog Post</p>
                        <hr/>
                        <p className="section-title">Blog Post</p>                     
                        <div className="form-add-post">
                              <label htmlFor="title">Title</label>
                              <input type="text" value={this.state.formBlogPost.title}  name="title" placeholder="Add Title" onChange={this.handleFormChange}/>
                              <label htmlFor="body" >Blog Content</label>
                              <textarea name="body" id="body" cols="30" rows="10" value={this.state.formBlogPost.body} placeholder="add desc" onChange={this.handleFormChange}></textarea>
                              <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                        </div>
                        {
                              this.state.comment.map(comment => {
                                    return <p key={comment.id}>{comment.id} - {comment.name} - {comment.email}</p>
                              })
                        }
                        {
                              this.state.post.map(post => {
                                    return <Post key={post.id}  data={post} remove={this.handleRemove} update={this.handleUpdate} detail={this.handleDetail}/>
                              })
                        }                        
                  </Fragment>
            )
      }
}

export default BlogPost;