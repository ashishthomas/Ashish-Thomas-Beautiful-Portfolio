import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title:
      "From Static to Stellar: My Journey Building a React + Tailwind Portfolio",
    date: "August 19, 2025",
    excerpt:
      "A behind-the-scenes look at how I designed, built, and deployed my developer portfolio using React, Vite, and Tailwind CSS.",
    content: `
      Building my portfolio wasn’t just about putting projects online — it was about telling my story as a developer.
      I used React for modularity, Tailwind for styling speed, and Netlify for deployment.
      Key takeaway: keep your portfolio lean, fast, and recruiter-friendly.
    `,
  },
  {
    id: 2,
    title: "Lessons from FlowPay: Frontend Decisions That Saved Me Hours",
    date: "August 12, 2025",
    excerpt:
      "Insights from building a payment application frontend—state management trade-offs, UI tweaks, and performance hacks.",
    content: `
      FlowPay taught me a lot about building performant forms, validation, and API handling.
      I experimented with Zustand vs Redux and optimized renders with React.memo.
      Result: snappy UI, less boilerplate, and cleaner state flow.
    `,
  },
  {
    id: 3,
    title:
      "Designing for Humans: Balancing Aesthetics and Usability in Web Development",
    date: "July 28, 2025",
    excerpt:
      "Every pixel has a purpose. Here’s how I approached user-centric design while building real-world projects.",
    content: `
      Good design is invisible. While building, I focused on readability, contrast, and accessibility.
      The best compliment I received was: 'It just feels easy to use.'
      That’s what design should achieve.
    `,
  },
];

export const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const modalRef = useRef(null);

  // Close modal on clicking outside
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
