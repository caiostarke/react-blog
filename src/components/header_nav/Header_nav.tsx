import { Link } from "react-router-dom"

export default function Header_nav() {
  return (
    <header>
        <nav className="py-5 shadow-xl">
        <ul className="flex max-w-4xl gap-5 mx-auto">
          <li>
            <Link to={"/"}>Blog posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
