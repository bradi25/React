import axios from 'axios';

const RootPath = "http://localhost:3004";
const OnlineRoot = "https://jsonplaceholder.typicode.com";

const Get = (path, Root) => {
      const promise = new Promise((resolve, reject) => {
            axios.get(`${Root ? OnlineRoot:RootPath}/${path}`)
            .then((result) => {
                  resolve(result.data);                  
            }, err => {
                  reject(err);
            });
      })
      return promise;
}

const defaultBlog = () => Get("posts?_sort=id&_order=desc", false);
const getComment = () => Get("comments", true);

const API = {
      defaultBlog,
      getComment
}

export default API;


