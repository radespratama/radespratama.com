import { useState, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronTop } from "./Icon";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowButton(window.pageYOffset > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          className="flex justify-center items-center p-3 lg:p-4 bottom-10 right-10 text-xl 
          rounded-full cursor-silence bg-white dark:bg-gray-950 text-gray-100 
          dark:text-gray-900 fixed"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <ChevronTop classNames="h-7 w-7 stroke-gray-950 dark:stroke-white" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
