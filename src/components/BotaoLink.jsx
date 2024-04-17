import { motion } from "framer-motion" 

export default function BotaoLink({ link, children }) {
  return (
    <motion.a 
      className="bg-green-700 p-3 rounded-2xl text-xl"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 1000, damping: 20}}
      href={link}
      target="_blank"
    >
      {children}
    </motion.a>
  )
}
