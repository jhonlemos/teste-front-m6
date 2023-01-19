import { useState } from "react";
import Body from "../components/body";
import Card from "../components/card";
import Inputs from "../components/inputs";
import CountingCard from "../components/countingCard";
import { motion } from "framer-motion";

const Calculate = () => {
  const [resultData, setResultData] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Body>
        <Card>
          <Inputs setResultData={setResultData} />
          <CountingCard resultData={resultData} />
        </Card>
      </Body>
    </motion.div>
  );
};

export default Calculate;
