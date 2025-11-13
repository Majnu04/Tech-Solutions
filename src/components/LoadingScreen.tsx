import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-dark-950 flex items-center justify-center"
    >
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 border-4 border-primary-300 border-t-transparent rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-primary-300 font-bold"
        >
          Loading...
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
