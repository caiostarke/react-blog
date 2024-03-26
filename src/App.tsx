import './App.css'
import Header_nav from './components/header_nav/header_nav'
import Posts from './components/posts/posts'

function App() {

  return (
    <>
      <Header_nav />
      <Posts title='My First Post' description='This is my first post'/>
      <Posts  title='My Second Post' description='This is my second post' />
      <Posts  title='My Third Post' description='This is my third post'/>
    </>
  )
}

export default App
