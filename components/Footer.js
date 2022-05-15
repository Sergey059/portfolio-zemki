import Link from "next/link";
import styles from "../styles/Footer.module.sass"
import Button from "./Button";
import Logo from "./Logo";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";

const navigation = [
  { id: 1, title: "Главная", path: "/" },
  { id: 2, title: "Мои работы", path: "/projects" },
  { id: 3, title: "Прайс лист", path: "#" },
  { id: 4, title: "Контакты", path: "/contacts" },
];


const Footer = () => {
  return <footer className={styles.footer}>
    <div className={`container ` + styles.container}>
      <div className={styles.left}>
        <Logo className={styles.logo} />
        <p className={styles.text}>Запишись на съемку прямо сейчас и получи скидку 10%</p>
        <Button text="Записаться на съемку" />
      </div>
      <div className={styles.right}>
        <nav className={styles.nav}>
          {navigation.map(({ id, title, path }) => (
            <Link key={id} href={path}>
              <a>{title}</a>
            </Link>
          ))}
        </nav>
        <a className={styles.social} href="#" target="_blank">
          <FaInstagram />
          <span>Подписаться на мой Instagram</span>
        </a>
        <button className={styles.up}><AiOutlineArrowUp /></button>
        <p className={styles.copy}>© 2022 Все права защищены</p>
        <p className={styles.dev}>developed by <a className={styles.link} href="https://sv-59.ru/">S.Vedernikov</a></p>
      </div>
    </div>
  </footer>;
};

export default Footer;
