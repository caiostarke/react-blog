import { Link, useLoaderData, Form } from "react-router-dom"
import { getPost } from "../../data/post"
import Nav from '../../components/header_nav/Header_nav'

import ReactMarkdown from 'react-markdown'
import remarkParse from 'remark-parse'

export async function loader( { params }: any ) {
  const post = await getPost(params.postId);
  return post
}


export default function Post() {
  const post = useLoaderData() as Post;

  const remarkPlugins = [remarkParse];

  return (
    <>
    <Nav />

    <div className='py-5 mx-auto mt-10 px-7 md:max-w-3xl sm:max-w-2xl'>
        <h1 className="text-2xl font-bold"> { post.title} </h1>
        <p className="mt-2 text-gray-600 "> { post.description }</p>
        <ReactMarkdown className="mt-5 leading-7" remarkPlugins={remarkPlugins}>
          {post.body }
        </ReactMarkdown>


        <div className="flex gap-2 mt-5">
          <Link to={`/post/${post.id}/edit`} className="px-5 py-2 text-white duration-150 rounded-md bg-sky-500 hover:bg-sky-600">Edit</Link>
          
          <Form 
          method="post"
          action="destroy"
          onSubmit={(event) => {
            if (
              !confirm(
                "Please confirm you want to delete this record."
              )
            ) {
              event.preventDefault();
            }
          }}
          > 
            <button type="submit" className="px-5 py-2 text-white duration-150 bg-red-500 rounded-md hover:bg-red-600">Delete</button>
          </Form>
        </div>

    </div>
    
    </>
  )
}

