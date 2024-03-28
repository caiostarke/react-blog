import Nav from './components/header_nav/Header_nav'
import { Outlet, useLoaderData, Form } from 'react-router-dom'
import { getPosts, createPost } from './data/post';
import './index.css'

import Posts from './routes/Post/Posts';

export async function loader() {
  const posts: Post[] = await getPosts();
  return posts;
} 

export async function action() {
    const post = await createPost({} as PostData); 
    return post
}

function App() {
  const posts: Post[] = useLoaderData() as Post[];
  
  return (
    <>  
      <Nav />

      <Outlet />  
      
      <nav>
        { posts.length ? (
            <ul>
              {posts.map( (post) => (
                
                <li key={post.id}> 
                  <Posts id={post.id} title={post.title} description={post.description} />
                </li>

              ))}
            </ul>
          ): 
          <p>No posts</p>
        }
      </nav>

      <Form method='post'>
          <button type='submit'> Add post </button>
      </Form>

    </>
  )
}

export default App
