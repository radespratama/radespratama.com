import { motion } from "framer-motion";
import Link from "next/link";

export default function ComingSoon({ pages }) {
  return (
    <motion.article
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.7 }}
      className="min-h-screen flex flex-col items-center justify-center"
    >
      Page {pages} coming soon 🗿

      <Link href="/">
        <a className="my-4 hover:underline">Back to home</a>
      </Link>
    </motion.article>
  );
}
