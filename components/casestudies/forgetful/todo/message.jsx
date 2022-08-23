import styled from "styled-components";
import { motion } from "framer-motion";

const MessageText = styled(motion.p)`
  font-size: clamp(1rem, 4vw, 1.25rem);
  color: ${(props) => props.theme.textGray};
`;

const Message = () => {
  return (
    <motion.div>
      <MessageText>Can you really remember everything?</MessageText>
    </motion.div>
  );
};

export default Message;
