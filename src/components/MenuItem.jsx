import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function MenuItem({ texto, link }) {
  return (
    <motion.li 
      className="text-white text-lg font-semibold"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 1000, damping: 20}}
    >
      <Link to={link}>{texto}</Link>
    </motion.li>
  )
}
