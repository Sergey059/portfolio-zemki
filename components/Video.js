import styles from "../styles/Video.module.sass"

function Video() {
  return (
    <section>
      <video className={styles.video} src="video.mp4" autoPlay loop muted>
        <p>Ваш браузер не поддерживает HTML5 видео. Используйте <a href="video.mp4">ссылку на видео</a> для доступа.</p>
      </video>
    </section>
  )
}

export default Video