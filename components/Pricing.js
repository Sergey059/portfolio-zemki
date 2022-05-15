import styles from "../styles/Pricing.module.sass"
import Button from "./Button"

const Pricing = () => {
  return (
    <section className={styles.prices}>
      <h2 className={styles.title}><span>Цены</span></h2>
      <div className={`container ` + styles.container}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3 className={styles.subtitle}>Эконом</h3>
            <ul className={styles.list}>
              <li className={styles.item}>до 1,5 часов съемки</li>
              <li className={styles.item}>одна локация либо в студии</li>
              <li className={styles.item}>помощь с позированием</li>
              <li className={styles.item}>подбор реквизита</li>
              <li className={styles.item}>профессиональная ретушь</li>
              <li className={styles.item}>15 качественных фото</li>
              <li className={styles.item}>100-150 фото с цветокорекцией</li>
            </ul>
            <div className={styles.bottom}>
              <Button className={styles.button} text="Заказать" />
              <p className={styles.price}>2000 ₽</p>
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.subtitle}>Стандарт</h3>
            <ul className={styles.list}>
              <li className={styles.item}>до 2,5 часов съемки</li>
              <li className={styles.item}>до 2-х локаций либо в студии</li>
              <li className={styles.item}>помощь с позированием</li>
              <li className={styles.item}>подбор реквизита</li>
              <li className={styles.item}>профессиональная ретушь</li>
              <li className={styles.item}>30 качественных фото</li>
              <li className={styles.item}>200-250 фото с цветокорекцией</li>
            </ul>
            <div className={styles.bottom}>
              <Button className={styles.button} text="Заказать" />
              <p className={styles.price}>4000 ₽</p>
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.subtitle}>Бизнес</h3>
            <ul className={styles.list}>
              <li className={styles.item}>до 5 часов съемки</li>
              <li className={styles.item}>до 3-х локаций либо в студии</li>
              <li className={styles.item}>помощь с позированием</li>
              <li className={styles.item}>подбор реквизита</li>
              <li className={styles.item}>профессиональная ретушь</li>
              <li className={styles.item}>50 качественных фото</li>
              <li className={styles.item}>300-350 фото с цветокорекцией</li>
            </ul>
            <div className={styles.bottom}>
              <Button className={styles.button} text="Заказать" />
              <p className={styles.price}>7000 ₽</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing