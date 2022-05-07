import Image from "next/image";
import styles from "../styles/About.module.sass";

const About = () => {
  return (
    <section className={styles.about}>

      <div className={`container ` + styles.container}>
        <div className={styles.imgBox}>
          <Image
            src="/photo.jpg"
            width={600}
            height={682}
          />
        </div>

        <div className={styles.textBox}>
          <h2 className={styles.title}><span>Обо мне</span></h2>
          <p className={styles.text}>Привет! Меня зовут Юлия.</p>
          <p className={styles.text}>Я увлекаюсь фотосъемкой более 5 лет и сейчас это мое главное и любимое дело. Я считаю, что лучший способ оценить фотографа - это посмотреть его портфолио.</p>
          <p className={styles.text}>Самые приятные моменты - это когда людям нравится то, что ты делаешь. Приглашаю вас на свою съемку, вы обязательно влюбитесь в результат. Ведь в каждый кадр я вкладываю свою душу!</p>
        </div>

      </div>
    </section>
  );
};

export default About;