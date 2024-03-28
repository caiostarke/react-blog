import { useLoaderData, Form } from "react-router-dom"
import { getPost } from "../../data/post"

export async function loader( { params }: any ) {
  const post = await getPost(params.postId);
  return post
}

export default function Post() {
  const post = useLoaderData() as Post;

  return (
    <div className='py-5 mx-auto mt-10 px-7 md:max-w-3xl sm:max-w-2xl'>
        <h1 className="text-2xl font-bold"> { post.title} </h1>
        <p className="mt-2 text-gray-600 "> { post.description }</p>
    </div>
  )
}

