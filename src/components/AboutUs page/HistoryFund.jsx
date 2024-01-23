import styles from "./historyFund.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";
import SwipeRightIcon from "../ui/icons/SwipeRightIcon";

const HistoryFund = () => {
  return (
    <section className={styles.ourTeam}>
      <div className={styles.container}>
        <div>
          <div className={`${globalStyles.title}`}>Історія Фонду</div>
        </div>
        <div className={styles.block_news}>
          <div className={styles.news_item}>
            <div className={`${globalStyles.text14B}`}>2022</div>
            <div className={styles.mounth_text}>травень</div>
            <div className={ `${globalStyles.text12Fw4} ${styles.subtitle}`}>
              Зустріч двох українців з відставним ветераном США. Організація
              спільної діяльності. Вдала евакуаційная місія до Северодонетська -
              120 цивільних евакуйовано з частково окупованого міста
            </div>
          </div>
          <div className={styles.news_item}>
            <div className={`${globalStyles.text14B}`}>2022</div>
            <div className={styles.mounth_text}>червень</div>
            <div className={ `${globalStyles.text12Fw4} ${styles.subtitle}`}>
            Реєстрація благодійного фонду “ДЛЯ ГЕРОЇВ”. Партнерство з закордонними організаціями, налагодження доставки гуманітарної допомоги до фронтових і прифронтових територій
            </div>
          </div>
          <div className={styles.news_item}>
            <div className={`${globalStyles.text14B}`}>2022</div>
            <div className={styles.mounth_text}>серпень</div>
            <div className={ `${globalStyles.text12Fw4} ${styles.subtitle}`}>
            Створення і захист благодійного проєкту LIVE AID UKRAINE. Отримано перший грант на проведення благодійного концертного туру містами України на підтримку ЗСУ
            </div>
          </div>
        </div>
        <div className={styles.swipe_wrapper}>
          <SwipeRightIcon/>
          <div className={styles.swipeRight_title}>Гортай вліво</div>
        </div>
      </div>
    </section>
  );
};

export default HistoryFund;
