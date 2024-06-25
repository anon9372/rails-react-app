import './App.css'
import PostsList from './components/postsList'

function App() {

  return (
    <>
      <div className='app'>
        <h1>React on Rails blog</h1>
        <p>Find this application layout in client/src/App.jsx</p>
        <PostsList />
      </div>
    </>
  )
}

export default App
