import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Frames.module.sass"

const frames = [
  { id: styles.frame1, src: "/photo-1.jpg", alt: "Фото девочки" },
  { id: styles.frame2, src: "/photo-2.jpg", alt: "Фото девушка на мосту" },
  { id: styles.frame3, src: "/photo-3.jpg", alt: "Фото девушка на мосту" },
  { id: styles.frame4, src: "/photo-4.jpg", alt: "Фото девушка на мосту" },
  { id: styles.frame5, src: "/photo-5.jpg", alt: "Фото девушка на мосту" },
  { id: styles.frame6, src: "/photo-6.jpg", alt: "Фото девушка на мосту" },
  { id: styles.frame7, src: "/photo-7.jpg", alt: "Фото девушка на мосту" }
];

const Frames = () => {
  return (
    <section className={styles.frames}>
      <h2 className={styles.title}><span>Лучшие кадры</span></h2>
      <div className={styles.content}>
        {frames.map(({ id, src, alt }) => (

          <Link key={id} href="#">
            <a className={styles.frame + " " + id}>
              <Image
                src={src}
                alt={alt}
                layout="fill"
              />
            </a>
          </Link>
        ))}
      </div>
    </section >
  )
}

export default Frames