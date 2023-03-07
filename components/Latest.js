import Image from "next/image"
import styles from "../styles/Latest.module.sass"
import Button from "./Button"


const Latest = () => {
  return (
    <div className={styles.latest} id="message">
      <h2 className={styles.title}><span>Оставить сообщение</span></h2>
      <div className={`container ` + styles.container}>
        <form className={styles.form} action="#" method="post" >
          <div className={styles.inputWrap}>
            <input className={styles.input} placeholder="Имя *" required />
          </div>
          <div className={styles.inputWrap}>
            <input className={styles.input} placeholder="Email *" required />
          </div>
          <div className={styles.inputWrap}>
            <input className={styles.input} placeholder="Телефон" />
          </div>
          <div className={styles.inputWrap}>
            <textarea className={styles.textarea} placeholder="Текст сообщения"></textarea>
          </div>
          <div className={styles.bottom}>
            <label className={styles.text}>
              <input className={styles.checkbox} id="checkbox" type="checkbox" required /><span className={styles.accord}>Я принимаю условия пользовательского соглашения и согласен на обработку персональных данных</span>
            </label>
            <Button text="Отправить" />
          </div>
        </form>
        <div className={styles.image}>
          <Image
            src="/photographer.jpg"
            alt="фотограф"
            width={600}
            height={800}
          />
        </div>
      </div>
    </div>
  )
}

export default Latest