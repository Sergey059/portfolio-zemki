import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import Logo from "./Logo";
import styles from "../styles/Header.module.sass";

const navigation = [
  { id: 1, title: "Главная", path: "/" },
  { id: 2, title: "Мои работы", path: "/projects" },
  { id: 3, title: "Контакты", path: "/contacts" },
];

const Header = () => {
  const { pathname } = useRouter();
  const [show, setShow] = useState(false);

  return (
    <header className={styles.header}>
      <Logo />

      <button className={styles.burger} onClick={() => setShow(!show)}>
        {!show ? <CgMenuGridO /> : <CgClose />}
      </button>

      <nav className={show ? styles.nav + " " + styles.active : styles.nav}>
        <div className={styles.links}>
          {navigation.map(({ id, title, path }) => (
            <Link key={id} href={path}>
              <a className={pathname === path ? styles.active : null}>
                {title}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
