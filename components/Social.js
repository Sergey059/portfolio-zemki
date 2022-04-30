import { FaInstagram, FaVk, FaTelegramPlane } from "react-icons/fa";

import styles from "../styles/Home.module.sass";

const Social = () => {
  return (
    <div className={styles.social}>
      <a href="#" target="_blank">
        <FaInstagram />
      </a>
      <a href="#" target="_blank">
        <FaVk />
      </a>
      <a href="#" target="_blank">
        <FaTelegramPlane />
      </a>
    </div>
  );
};

export default Social;
