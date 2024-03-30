import Nav from './components/header_nav/Header_nav'
import { Outlet, useLoaderData, Form, Link } from 'react-router-dom'
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

      <div className='mx-auto mt-5 md:max-w-3xl sm:max-w-2xl'>
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

        <Link to='/post/create'>Add post</Link>


      </div>

      <Outlet />
      

    </>
  )
}

export default App
