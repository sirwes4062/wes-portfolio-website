import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="Loading-conatainer  bg-[#0e1215] w-full h-screen flex justify-center items-center">
      <div className="word-container  flex justify-center h-12  w-96  relative">
        <motion.div
          initial={{ x: "-50vw" }}
          animate={{ x: "20vw" }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="word-transition  bg-[#0e1215]  h-12  w-36  absolute  z-20"></motion.div>

        <motion.h1
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-[#f3f2f3] text-center tracking-[1.5rem] text-4xl  absolute  z-10">
          Loading
        </motion.h1>
      </div>
    </div>
  );
};

export default Loading;
