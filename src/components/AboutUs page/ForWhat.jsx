import styles from "./forWhat.module.css";

const ForWhat = () => {
  return (
    <section className={styles.for_what}>
      <div className={styles.container}>
        <div className={styles.subtitle}>Про фонд</div>
        <div className={styles.for_what_wraper}>
          <h2 className={styles.title}>заради чого ми це робимо?</h2>
          <div className={styles.block_text}>
            <p>
              Наші діти не мають більше бачити жахів війни, не мають прокидатися
              вночі від гуків сирен або звуків вибухів.
            </p>
            <div className={styles.text_bottom}>
              Тож ми будемо працювати для того, щоб нове покоління мало змогу
              мріяти і втілювати всі свої найбажаніші мрії в своє життя!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhat;
