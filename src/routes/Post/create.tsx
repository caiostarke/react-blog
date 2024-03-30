import Nav from '../../components/header_nav/Header_nav'
import { Form, redirect } from 'react-router-dom'

import { createPost } from '../../data/post';

export async function action({ request }: any) {
    const formData = await request.formData();
    const post = Object.fromEntries(formData);
    await createPost(post as PostData);
    
    return redirect('/');
}

export default function create() {
  return (
    <>
    <Nav />
    <div className='mx-auto mt-10 px-7 md:max-w-3xl sm:max-w-2xl'>
        <Form method='post' className='flex flex-col gap-5 py-10' >
            <input className='py-2 pl-2 border border-red-200 border-solid rounded-sm outline-none' type="text" name="title" placeholder="Post title" aria-label="Post title" />

            <input name="description" placeholder="Post description" aria-label="Post description" className='py-2 pl-2 border border-red-200 border-solid rounded-sm outline-none' />
           
            <textarea name="body" placeholder="Post content" aria-label="Post Content" className='py-2 pl-2 border border-red-200 border-solid rounded-sm outline-none' />
            
            <div>
                <button type="submit" className="px-5 py-2 text-white duration-150 rounded-md bg-sky-500 hover:bg-sky-600">Add post</button>
            </div>

        </Form>
    </div>
    </>
  )
}
