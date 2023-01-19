import "../components/inputs/style.css";
import Cat from "../animation/cat.gif";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const Error = () => {
  const history = useHistory();

  function back() {
    history.push("/");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="div-animation">
        <img src={Cat} alt="animação"></img>
        <button className="button-back" onClick={back}>
          Voltar
        </button>
      </div>
    </motion.div>
  );
};

export default Error;
