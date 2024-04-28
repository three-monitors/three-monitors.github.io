// Exersise 35

// src/components/Blog.tsx

// import React from "react";

// class Blog extends React.Component {   

//     constructor(props:any) {
//         super(props);
//         this.state = { post: props.post };
//     }

//     render() {
//        return(
//         <article className='post'>
//             <div className='cover-container'>
//               <img src={this.props.post.cover} alt={this.props.post.title} />
//             </div>
//             <div className='post-footer'>
//               <h3>{this.props.post.title} {this.props.post.id}</h3>
//               <p>{this.props.post.content}</p>
//             </div>
//         </article>
//         );
//     }
// }
// export default Blog;

const Blog = ({ post }) => {
  return(
    <article className="post">
      <div className="cover-container">
        <img src={post.cover} alt={post.title}/>
      </div>
      <div className="post-footer">
        <h3>
          {post.title} {post.id}
        </h3>
        <p>{post.content}</p>
      </div>
    </article>
  );
};
  
  export default Blog;


// Lecture 35

// import { useState } from 'react';
// const Blog = () => {
//   const[isLoading, setIsLoading] = useState(true);

//   const [posts, setPosts] = useState([]);

//   const dataFetch = async () => {
//     const data = await (
//       await fetch('https://jsonplaceholder.typicode.com/posts')
//     ).json();
//     setPosts([...posts, data]);
//     console.log(data)
//     // (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
//   }

//   return (
//     <>
//       {
//         isLoading? (
//           <div>
//             <p>Data is loading...</p>
//             <button onClick={
//               () => {
//                 dataFetch();
//                 setIsLoading(false)
//               }
//             }>Get Data</button>
//           </div>
//         )
//         :
//         (
//           <div>
//             <p>Loading complete</p>
//             {JSON.stringify(posts)}
//           </div>
//         )
//       }
//     </>
//   )
// }

// export default Blog;