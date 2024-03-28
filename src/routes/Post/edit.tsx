import { useLoaderData, Form } from 'react-router-dom'

import Nav from '../../components/header_nav/Header_nav'

export default function Edit() {
  const post = useLoaderData() as Post;

  return (
    <>
        <Nav />

        <main className='py-5 mx-auto mt-10 px-7 md:max-w-4xl sm:max-w-2xl'>
            <Form method='post' id='post--form__edit' className='flex '>

                <div className="flex flex-col gap-5">
                    <div className='flex flex-col'>
                        <span>Post title</span>
                        
                        <input
                        className='py-2 pl-2 border border-red-200 border-solid rounded-sm outline-none'
                        placeholder={post.title}
                        aria-label="Post Title"
                        type="text"
                        name="post--title"
                        />

                        <span className='mt-5'>Post Description</span>

                        <textarea
                        className='py-2 pl-2 my-2 border border-red-200 border-solid rounded-sm outline-none'
                        placeholder={post.description}
                        aria-label="Post Description"
                        type="text"
                        name="post--description"
                        />
                    </div>
                    
                    <label className='flex flex-col'>
                        <span>Post Content</span>
                        <textarea
                        className='py-2 pl-2 my-2 border border-red-200 border-solid rounded-sm outline-none'
                        name="post--content"
                        placeholder={post.body}
                        />
                    </label>

                    <div className='flex gap-5'>
                        <button className='px-4 py-2 text-white duration-200 bg-blue-400 border-solid rounded-md outline-none hover:bg-blue-600' type="submit">Save</button>
                        <button type="button">Cancel</button>
                    </div>


                </div>
            
            </Form>

        </main>
    </>

)
}
