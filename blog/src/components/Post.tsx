// Exersise 37
// Перепишіть функціональний компонент Post.tsx, використовуючи хуки useState, useEffect, useContext, createContext.
import {useState, useEffect, useContext, createContext} from 'react';

const Post = () => {
    // Потрібно створити контекст PostContext
    const PostContext = createContext("");

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
    const PostTitle = () => {
        return (
            <>
                <h2>{postHeader.postName}</h2>
                <p>{postHeader.postDescription}</p>
            </>
        )
    }
    
    const postHeader = {
        postName: "Our blog",
        postDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi culpa odio asperiores a tempore."
    }

    // Потрібно створити компонент PostMain
    const PostMain = () => {
        const post = useContext(PostContext);
        return (
            <div>{post.content}</div>
        )
    }

    // Компонент Post повинен повертати наступне:

    // return (
    //     <PostContext.Provider value={post}>
    //         <Layout>
    //         </Layout>
    //     </PostContext.Provider>
    // );

    return (
        <PostContext.Provider value={postHeader}>
            <Layout>
                <PostMain />
            </Layout>
        </PostContext.Provider>
    )
}

export default Post;