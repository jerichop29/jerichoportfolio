import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { resumeImage, resumeCopy } from "../assets"; // Ensure these paths are correct

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Function to trigger resume download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeCopy; // Ensure this is a valid file path (PDF, DOCX, etc.)
    link.download = "Resume.pdf"; // Rename the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-7xl max-h-[100vh] bg-white p-4 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Display Resume Image */}
            <img
              src={resumeImage}
              alt="Resume"
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            {/* Download Button */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleDownload}
                className="bg-purple-900 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition"
              >
                Download Resume
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-black hover:text-red-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
