// Exersise 39
// import { useState } from 'react' // comment
// import './App.css'
// import Posts from './components/Posts';

// function App() {
//   return (
//     <>

//       <Posts />

//     </>
//   )
// }

// export default App

// Lecture 39

import { useState } from 'react' // comment
import './App.css'
import PostList from './components/PostList';
import Home from './pages/home';
import ErrorPage from './pages/error';
import About from './pages/about';

function App() {
  return (
    <>

      {/* <PostList /> */}

      <Home />

      {/* <ErrorPage /> */}

      {/* <About /> */}

    </>
  )
}

export default App