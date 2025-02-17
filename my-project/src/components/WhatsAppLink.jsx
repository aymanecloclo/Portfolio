import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import ScrollToTopButton from "./ScrollToTopButton";
function WhatsAppLink() {
  const phoneNumber = "+212618941000";
  const message = encodeURIComponent("Hello, I need more info!");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;



  return (
    <div className="flex flex-col items-center fixed bottom-4 right-4 gap-3  z-50" style={{ zIndex: 90000}}>
      {/* Bouton de retour en haut avec progression */}
     < ScrollToTopButton/>

      {/* Lien WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#0D74CE] text-white rounded-full shadow-lg hover:bg-[#0D74CE]/90 transform hover:scale-110 transition-all duration-300 ease-in-out"
        aria-label="Contact via WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Lien LinkedIn */}
      <a
        href="https://www.linkedin.com/in/aymane-rachid-106700317/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#0D74CE] text-white rounded-full shadow-lg hover:bg-[#0D74CE]/90 transform hover:scale-110 transition-all duration-300 ease-in-out"
        aria-label="Visit LinkedIn profile"
      >
        <FaLinkedin className="text-2xl" />
      </a>
    </div>
  );
}

export default WhatsAppLink;
