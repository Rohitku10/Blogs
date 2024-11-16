// import {Component} from 'react'
// // import {Oval} from 'react-loader-spinner'
// import {TailSpin} from 'react-loader-spinner'
// // import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

// import BlogItem from '../BlogItem'

// import './index.css'

// class BlogsList extends Component {
//   state = {isLoading: true, blogsData: []}

//   componentDidMount() {
//     this.getBlogsData()
//   }

//   getBlogsData = async () => {
//     const response = await fetch('https://apis.ccbp.in/blogs')
//     const data = await response.json()
//     const formattedData = data.map(eachItem => ({
//       id: eachItem.id,
//       title: eachItem.title,
//       imageUrl: eachItem.image_url,
//       avatarUrl: eachItem.avatar_url,
//       author: eachItem.author,
//       topic: eachItem.topic,
//     }))
//     this.setState({blogsData: formattedData, isLoading: false})
//   }

//   render() {
//     const {blogsData, isLoading} = this.state
//     return (
//       <div className="blog-list-container">
//         {isLoading ? (
//           <TailSpin type="TailSpin" color="#00BFFF" height={50} width={50} />
//         ) : (
//           blogsData.map(item => <BlogItem blogData={item} key={item.id} />)
//         )}
//       </div>
//     )
//   }
// }

// export default BlogsList

import { Component } from 'react'
import { TailSpin } from 'react-loader-spinner'
import BlogItem from '../BlogItem'


class BlogsList extends Component{
  state={isLoading:true,blogsData:[] }

  componentDidMount(){
    this.getBlogsdata()
  }

  getBlogsdata = async() =>{
    const response = await fetch("https://apis.ccbp.in/blogs");
    const data = await response.json();
    const formattedData = data.map(each =>({
      id : each.id,
      title : each.title,
      imageUrl : each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))

    this.setState({isLoading:false,blogsData: formattedData})
  }

render(){
  const {isLoading,blogsData} = this.state
  return(
    <div>
      {isLoading?(
        <TailSpin type="TailSpin" color="#00BFFF" height={50} width={50} />
      ):(
        blogsData.map(eachItem =><BlogItem blogsData={eachItem} key={eachItem.id}/>
      ))}

    </div>

  )
}

}

export default BlogsList