import { Link  } from 'react-router-dom'

type PostsProps = {
    id: number,
    title: string,
    description: string,
}

export default function Posts(props: PostsProps) {
  return (
      <Link to={`/post/${props.id}`} className='mx-auto shadow-xl px-7'>
          <h1 className="text-2xl font-bold"> {props.title} </h1>
          <p className="mt-2 text-gray-600 ">{props.description}.</p>
      </Link>
  )
}
