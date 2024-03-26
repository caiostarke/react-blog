type PostsProps = {
    title: string,
    description: string
}

export default function posts(props: PostsProps) {
  return (
    <div className='px-7 md:max-w-3xl sm:max-w-2xl mx-auto mt-10 shadow-xl py-5 cursor-pointer'>
        <h1 className="text-2xl font-bold"> {props.title} </h1>
        <p className=" text-gray-600 mt-2">{props.description}.</p>
    </div>
  )
}
