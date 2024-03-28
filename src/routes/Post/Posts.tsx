import { Link  } from 'react-router-dom'

type PostsProps = {
    id: number,
    title: string,
    description: string,
}

export default function Posts(props: PostsProps) {
  return (
    <>
      <Link to={`/post/${props.id}`} className='py-5 mx-auto mt-10 shadow-xl px-7 md:max-w-3xl sm:max-w-2xl'>
          <h1 className="text-2xl font-bold"> {props.title} </h1>
          <p className="mt-2 text-gray-600 ">{props.description}.</p>
      </Link>
    </>
  )
}
