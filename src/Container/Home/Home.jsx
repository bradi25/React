//import libraries
import React ,{ Component, Fragment } from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

//import style
import "./Home.css";

//import pages
import BlogPost from "../pages/BlogPost/BlogPost";
import YoutubeCompPage from "../pages/YoutubeCompPage/YoutubeCompPage";
import Product from "../pages/Product/Product";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import GlobalProvider from "../../context/context";

class Home extends Component {
      render() {
            return (      
                  <Router>
                              <Fragment>
                                    <div className="navigation">
                                          <Link to="/"> Blog Post</Link>
                                          <Link to="/product"> Product</Link>
                                          <Link to="/lifecycle"> LifeCycleComp</Link>
                                          <Link to="/youtube-comp"> YoutubeComp</Link>
                                    </div>
                                    <Route path="/" exact component={BlogPost}></Route>
                                    <Route path="/detail-post/:id" component={DetailPost}></Route>
                                    <Route path="/product" component={Product}></Route>
                                    <Route path="/lifecycle" component={LifeCycleComp}></Route>
                                    <Route path="/youtube-comp" component={YoutubeCompPage}></Route>
                              </Fragment>
                  </Router>
            )
      }
}

export default GlobalProvider(Home);