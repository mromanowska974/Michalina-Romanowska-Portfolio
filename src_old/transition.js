import { motion } from "framer-motion";

const Animation = ({children}) => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                ease: "easeOut", 
                duration: 1
            }}
            exit={{
                opacity: 0
            }}
            style={{
                width: '100%',
                height: '100%',
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {children}
        </motion.div>
    )
}

export default Animation;