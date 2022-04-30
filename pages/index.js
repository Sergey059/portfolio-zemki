import Head from "next/head";
import Button from "../components/Button";
import Social from "../components/Social";
import styles from "../styles/Home.module.sass";

const Home = () => (
  <>
    <Head>
      <title>Портфолио фотографа</title>
    </Head>
    <section className={styles.hero}>
      <div className={styles.container + " " + styles.container_top}>
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
  </>
);

export default Home;
