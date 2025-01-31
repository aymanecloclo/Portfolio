import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <motion.div id='contact'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.1,
      }}
      className="container    mx-auto px-6 lg:px-24 py-5 lg:py-10 lg:mt-10 flex flex-col-reverse lg:flex-row justify-center gap-16 "
    >
      <ContactForm />
      <ContactDetails />
    </motion.div>
  );
};

export default Contact;
