import { NavLink } from "react-router-dom"

export default function Header_nav() {
  return (
    <header>
        <nav className="py-5 shadow-xl">
        <ul className="flex max-w-4xl gap-5 mx-auto">
          <li>
            <NavLink 
              to={"/"}
              className={({isActive}) => isActive ? "border-b-sky-400  border-b-8 pb-4 text-sky-500" : ""}
            >Blog posts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
