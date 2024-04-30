// Lecture 36
import {useState, useEffect} from 'react'
//Lecture 39
import {Link} from 'react-router-dom'

function PostListItem({item, user}) {

    const [post, setPost] = useState({});
    const [author, setAuthor] = useState({});

    const toDate = date => new Date(date);

    const fetchPost = () => {
        setPost({...item});
        setAuthor({...user});
    }

    useEffect(() => {
        fetchPost()
        // console.log(post)
    }, []);

    // Lecture 38
    // Стилізуйте сторінку, використовуючи Tailwind CSS
    return(
        <article className='rounded overflow-hidden shadow-lg flex flex-col'>
            <div className='flex'>
                <span className='flex-1 font-bold'>Comments: {post.numComments} </span>
                <span className='flex-1 font-bold'>{toDate(post.datePublished).toDateString()}</span>
            </div>
            <a href="#" className='bg-red-300 px-4 py-2 text-white mt-3 mr-r hover:bg-white hover:text-red-300 transition duration-500 ease-in-out font-bold'>{post.title}</a>
            <div className='flex-initial w-62 max-w-62'>
                <img className='w-62 h-62 block object-fit-cover' src={post.cover}  alt={post.title} />
                <p>{post.content}</p>
            </div>
            <div>
                <span className='font-bold'>Author: {author.firstName + " " + author.lastName} </span>
                <Link  to={`/post/${post.id}`} class="bg-red-300 hover:bg-red-300 text-white font-bold py-2 px-4 border-b-4 border-red-300 hover:border-red-300 rounded">Read&nbsp;more</Link>
            </div>
        </article>
    )
}

export default PostListItem;