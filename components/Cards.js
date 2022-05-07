import Image from "next/image";
import styles from "../styles/Cards.module.sass";
const cards = [
  { id: 1, icon: "/photo.svg", title: "Фотосъемка", text: "Тысячи качественных и ярких фотографий" },
  { id: 2, icon: "/video.svg", title: "Видеосъемка", text: "Профессиональная съемка клипов и видеороликов" },
  { id: 3, icon: "/photo-video.svg", title: "Обработка", text: "Ваши фото и видео кадры будут идеальными" },
  { id: 4, icon: "/sound.svg", title: "Запись аудио", text: "Качественная запись звука и его обработка" },
];


const Cards = () => {
  return (
    <section className={styles.cards}>

      <div className={`container ` + styles.container}>
        {cards.map(({ id, icon, title, text }) => (

          <div key={id} className={styles.card}>
            <Image
              src={icon}
              width={60}
              height={60}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{text}</p>
          </div>

        ))}
      </div>

    </section>
  )
}

export default Cards