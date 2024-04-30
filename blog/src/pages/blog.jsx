// // Exersise 38
// // Створити сторінку src/pages/blog.jsx
// // Використовуючи хуки useContext, createContext, потрібно створити:
// import { useContext, createContext} from 'react';
// // Підключити до сторінки компонент Posts from '../components/Posts'
// //  Стилізуйте сторінку, використовуючи Tailwind CSS
// import Posts from '../components/Posts';

// // контекст BlogContext
// export const BlogContext = createContext('');

// // компонент Layout
// const Layout = ({children}) => {
//     return (
//         <div>
//             <Header />
//             <main>
//                 {children}
//             </main>
//         </div>
//     )
// }

// // компонент Header
// const Header = () => {
//     return (
//         <header>
//             <PostTitle />
//         </header>
//     )
// }

// // компонент BlogInfo
// const BlogInfo = {
//     postName: "Our blog",
//     postDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi culpa odio asperiores a tempore."
// }

// const PostTitle = () => {
//     const BlogInfo = useContext(PostContext);
//     <>
//         <h2>{BlogInfo.postName}</h2>
//         return <p>{BlogInfo.postDescription}</p>;
//     </>
// }

// // Сторінка повинна повертати наступне:

// //   function Blog() {

// //   const blogName = "Назва вашого блогу";

// //   return (
// //     <BlogContext.Provider value={blogName}>
// //       <Layout>
// //         <Posts />
// //       </Layout>
// //     </BlogContext.Provider>
// //   );

// // }

// function Blog() {

//   const blogName = "Our blog";

//   return (
//     <BlogContext.Provider value={blogName}>
//       <Layout>
//         <Posts />
//       </Layout>
//     </BlogContext.Provider>
//   );
// }

// Lecture 39
import  { useContext, createContext } from 'react';
import PostList from '../components/PostList';

const BlogContext = createContext('');

function Blog() {
    const Layout = ({children}) => {
        return (
            <div className="max-w-screen-xl mx-auto p-1">
                <Header />
                <main>
                    {children}
                </main>
            </div>
        )
    }

    const BlogInfo = () => {
        const blogHeader = useContext(BlogContext)
        return (
            <>
            <span className="text-3xl font-bold">{blogHeader.blogName}</span>
            <p>{blogHeader.blogDescription}</p>
            </>
        )
    }

    const blogHeader = {
        blogName: "HAIR & LASHES",
        blogDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi culpa odio asperiores a tempore."
    }

    const Header = () => {
        return (
            <div className="border-b-2 border-red-300 mb-5 flex justify-between text-sm">
                <div className="text-red-300 flex items-center pb-2 pr-2 uppercase">
                    <a href="#" className="font-semibold inline-block">
                        <BlogInfo />
                    </a>
                </div>
                <a href="#" className="text-1xl">See All</a>
            </div>
        )
    }

    return (
        <BlogContext.Provider value={blogHeader}>
            <Layout>
                <PostList />
            </Layout>
        </BlogContext.Provider>
    )
}

export default Blog;