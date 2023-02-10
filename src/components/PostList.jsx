import React, { Component } from 'react'
import axios from 'axios'

//Get Data API using axios

export default class PostList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
        
      }
    }


    componentDidMount(){

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
                this.setState({posts:response.data})
        })
        .catch(error => {

            console.log(error);

        })

    }
  render() {

    const{posts} = this.state
    return (
      <div>PostList data
      {
        posts.map(post => <div key={post.id}>{post.title}</div>)
      }
      </div>
    )
  }
}
