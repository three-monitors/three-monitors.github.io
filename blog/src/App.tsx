import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Lecture 33
// const jsxEl = <h1>I am a JSX element</h1>;

// const Header = (
//   <header>
//   <h1>Hello world</h1>
//   <h2>Hi there</h2>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure eum cupiditate est. Totam earum omnis laboriosam! Molestiae deleniti natus quas assumenda aperiam cupiditate, harum error deserunt, unde eum iure.</p>
//   </header>
// )

// const H1 = <h1>Hello world</h1>;
// const H2 = <h2>Hi there</h2>

// const Header = (
//   <header>
//   {H1}
//   {H2}
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure eum cupiditate est. Totam earum omnis laboriosam! Molestiae deleniti natus quas assumenda aperiam cupiditate, harum error deserunt, unde eum iure.</p>
//   </header>
// )

// const data = {
//   H1: <h1>Hello world</h1>,
//   H2: <h2>Hi there</h2>
// }

// const Header = (
//   <header>
//   {data.H1}
//   {data.H2}
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure eum cupiditate est. Totam earum omnis laboriosam! Molestiae deleniti natus quas assumenda aperiam cupiditate, harum error deserunt, unde eum iure.</p>
//   </header>
// )

// Exersise 33
// 3. Cтворити новий JSX-елемент з назвою jsxElement з таким вмістом:
const jsxElement = <h1>I am a JSX element</h1>;

// 4. Cтворити новий JSX-елемент header з таким вмістом:
const Header = (
  <header>
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </header>
)

// 5. Cтворити новий JSX-фрагмент з таким вмістом
const Fragment = (
  <>
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </>
)

// 6. Cтворити новий JSX-елемент footer з таким вмістом:
const Footer = (
  <footer>
    <p>Copyright &copy; 2024</p>
  </footer>
)

function App() {
  const [count, setCount] = useState(0);
  const today = new Date()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {/* {jsxEl} */}      

      {/* <h3 style={{ backgroundColor:'blue', color:'gold' }}>It's today: {today.toLocaleDateString()}</h3> */}

      {/* 3. Відобразити елемент jsxElement */}
      {jsxElement}
      
      {/* 4. Відобразити елемент header */}
      {Header}

      {/* 5. Відобразити JSX-фрагмент */}
      {Fragment}

      {/* 6. Відобразити елемент footer */}
      {Footer}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
