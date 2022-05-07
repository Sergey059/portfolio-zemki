import Button from "./Button";
import Social from "./Social";
import styles from "../styles/Hero.module.sass"

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
          <Button text="Оставить сообщение" />
          <Social />
        </div>
      </div>
    </section>
  )
}

export default Hero