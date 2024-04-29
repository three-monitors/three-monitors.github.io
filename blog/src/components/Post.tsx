// Exersise 37
// Перепишіть функціональний компонент Post.tsx, використовуючи хуки useState, useEffect, useContext, createContext.

import {useState, useEffect, useContext, createContext} from 'react';

// Потрібно створити компонент PostMain

// Компонент Post повинен повертати наступне:

//   return (
//       <PostContext.Provider value={post}>
//           <Layout>
//           </Layout>
//       </PostContext.Provider>
//     );


// Потрібно створити контекст PostContext
export const PostContext = createContext('');

// Потрібно створити компонент Layout
const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

// Потрібно створити компонент Header
const Header = () => {
    return (
        <header>
            <PostTitle />
        </header>
    )
}

// Потрібно створити компонент PostTitle
const postHeader = {
    postName: "Our blog",
    postDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi culpa odio asperiores a tempore."
}

const PostTitle = () => {
    const postHeader = useContext(PostContext);
    <>
        <h2>{postHeader.postName}</h2>
        return <p>{postHeader.postDescription}</p>;
    </>
}

// Потрібно створити компонент PostMain
const PostMain = () => {
    const post = useContext(PostContext);
    return (
        <div>{post.content}</div>
    )
}

function Post() {

    const [post, setPost] = useState([]);
    // const [likes, setLikes] = useState(0);
    const url = 'https://my-json-server.typicode.com/three-monitors/db';

    useEffect(() => {

        const fetchData = async () => {
            const data = await (await fetch(url)).json();
            console.log(data);
            setPost(data);
        };
        fetchData();
    }, []);

    // function likeThis() {
    //     setLikes(likes + 1);
    // }

    return (
        <PostContext.Provider value={post}>
            <Layout>
                <Header />
                <PostTitle />
                <PostMain />
            </Layout>
        </PostContext.Provider>
    )
}

export default Post;