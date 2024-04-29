// Lecture 36

// import { useState, useEffect } from 'react';
import PostListItem from './PostListItem';
import {useData} from "../hooks/useData";

const PostList = () => {
// const[isLoading, setIsLoading] = useState(true);

// const [posts, setPosts] = useState([]);
// const [authors, setAuthors] = useState([]);

const findById = id => authors.find(item => item.id == id)


const baseUrl = 'https://my-json-server.typicode.com/three-monitors/db';

const posts = useData(`${baseUrl}/posts`);
const authors = useData(`${baseUrl}/authors`);

// useEffect(() => {
//     const dataFetch = async () => {
//         const data = await (
//         await fetch(`${baseUrl}/posts`)
//         ).json();
//         setPosts(data);
//         // setIsLoading(false)
//         // console.log(data)
//         // Array(4)
//     }
//     const fetchUser = async () => {
//         const data = await (
//         await fetch(`${baseUrl}/authors`)
//         ).json();
//         setAuthors(data);
//         setIsLoading(false)
//         // console.log(data)
//         // Array(4)
//     }
//     dataFetch();
//     fetchUser();
// }, []);

// const dataFetch = async () => {
//     const data = await (
//     await fetch('https://jsonplaceholder.typicode.com/posts')
//     ).json();
//     setPosts([...posts, data]);
//     console.log(data)
//     // (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// }

return (
    <>
    {
        !posts? (
        <div>
            <p>Data is loading...</p>
        </div>
        )
        :
        (
        <section>
            <h2>Our Blog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi eos esse accusamus consequatur expedita ipsam pariatur quia numquam ut ullam, ea commodi magnam enim reprehenderit veritatis aut molestiae similique libero!</p>
            {/* {JSON.stringify(posts)} */}
            <div>
                {posts.map((post) =>
                <PostListItem item={post} key={post.id} user={findById(post.authorId)} />
                )}
            </div>
        </section>
        )
    }
    </>
)
}

export default PostList;