import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

const variantsTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const faq = [
  {
    question: "¿Lorem ipsum dolor sit amet?",
    answer:
      "Onsectetur adipisicing elit. Illo, autem perspiciatis nostrum obcaecati, repellendus atque optio at eius eveniet qui.",
  },
  {
    question: "¿Lorem ipsum dolor sit amet?",
    answer:
      "Onsectetur adipisicing elit. Illo, autem perspiciatis nostrum obcaecati, repellendus atque optio at eius eveniet qui.",
  },
  {
    question: "¿Lorem ipsum dolor sit amet?",
    answer:
      "Onsectetur adipisicing elit. Illo, autem perspiciatis nostrum obcaecati, repellendus atque optio at eius eveniet qui.",
  },
  {
    question: "¿Lorem ipsum dolor sit amet?",
    answer:
      "Onsectetur adipisicing elit. Illo, autem perspiciatis nostrum obcaecati, repellendus atque optio at eius eveniet qui.",
  },
  {
    question: "¿Lorem ipsum dolor sit amet?",
    answer:
      "Onsectetur adipisicing elit. Illo, autem perspiciatis nostrum obcaecati, repellendus atque optio at eius eveniet qui.",
  },
  {
    question: "¿Lorem ipsum dolor sit amet?",
    answer:
      "Onsectetur adipisicing elit. Illo, autem perspiciatis nostrum obcaecati, repellendus atque optio at eius eveniet qui.",
  },
];

const Faq = ({ faq }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div onClick={() => setOpen(!open)} className="faq">
      <div className="question">{faq.question}</div>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="answer"
        >
          {faq.answer}
        </motion.div>
      )}
    </motion.div>
  );
};

const index = () => {
  //autoScroll To Top
  useEffect(() => {
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
    scrollToTop();
  }, []);

  return (
    <motion.div
      variants={variantsTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="help"
    >
      <div className="container">
        <div className="title">Ayuda</div>
        <motion.div layout className="faqs">
          {faq.map((f) => {
            return <Faq faq={f} />;
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;
