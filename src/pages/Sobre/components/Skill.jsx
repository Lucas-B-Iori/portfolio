import { motion } from "framer-motion"

export default function Skill({ component: Component }) {
  
  return (
    <motion.div
      className="h-32 bg-transparent border-2 rounded-xl flex justify-center items-center border-spacing-1 w-full"
      whileHover={{ scale: [null, 1.15, 1.2] }}
      transition={{ duration: 0.3 }}
    >
      <Component className='size-52 max-md:size-12'/> 
    </motion.div>
  )
}
