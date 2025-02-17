import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const calculateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / totalHeight) * 100;
    setScrollProgress(progress);

    if (scrollTop > 300) {
      // Seuil pour afficher le bouton
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollProgress);
    return () => {
      window.removeEventListener("scroll", calculateScrollProgress);
    };
  }, []);

  return (
    <>
      {showButton && (
        <div className=" " style={{ zIndex: 90000}}>
          <button
            onClick={scrollToTop}
            className="relative w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300 ease-in-out"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={20} className="text-[#0D74CE] hover:text-white" />

            {/* Animation de progression circulaire */}
            <svg
              className="absolute top-0 left-0 w-full h-full transform -rotate-90"
              viewBox="0 0 36 36"
            >
              <path
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#e5e5e5"
                strokeWidth="2"
              />
              <path
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#0D74CE"
                strokeWidth="2"
                strokeDasharray={`${scrollProgress}, 100`}
                strokeLinecap="round"
                style={{ transition: "stroke-dasharray 0.5s ease" }} // Transition lissée
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

export default ScrollToTopButton;
