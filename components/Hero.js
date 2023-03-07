import Button from "./Button";
import Social from "./Social";
import styles from "../styles/Hero.module.sass"
import Link from "next/link";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ` + styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Юлия Земски</h1>
          <p className={styles.desc}>
            Когда фотографируешь людей в цвете, то фотографируешь их одежду,
            когда в черном-белом, то фотографируешь их душу
          </p>
          <Link href="#message">
            <a className={`btn ` + styles.btn}>Оставить сообщение</a>
          </Link>
          <Social />
        </div>
      </div>
    </section>
  )
}

export default Hero