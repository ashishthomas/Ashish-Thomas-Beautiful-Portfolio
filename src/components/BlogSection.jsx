import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts } from "../data/blogPosts";

export const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedPost(null);
      }
    };

    if (selectedPost) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedPost]);

  return (
    <section id="blog" className="py-20 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest <span className="text-primary">Blogs</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 rounded-2xl shadow-lg bg-white text-black dark:bg-purple-600 dark:text-white cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-black mb-3">
                {post.date}
              </p>
              <p className="text-base text-gray-800 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>

              <button
                onClick={() => setSelectedPost(post)}
                className="text-black font-medium hover:underline cursor-pointer dark:text-white"
              >
                Read More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-md bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white dark:bg-purple-500 rounded-2xl max-w-2xl w-full p-8 shadow-lg overflow-y-auto max-h-[90vh]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                {selectedPost.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-black mb-4">
                {selectedPost.date}
              </p>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {selectedPost.content}
              </p>

              <div className="text-right mt-6">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
