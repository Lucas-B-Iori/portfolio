import { Link } from "react-router-dom"

export default function MenuItem({ texto, link }) {
  return (
    <li className="text-white font-semibold hover:animate-pulse hover:skew-y-3">
      <Link to={link}>{texto}</Link>
    </li>
  )
}
