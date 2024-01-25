import styles from "./CharityProjects.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";
import ButtonToPartner from "./ButtonToPartner";
import ButtonFoto from "./ButtonFoto";
import CharityProjectsMobile from "./CharityProjectsMobile";
import { useEffect, useState } from "react";

const CharityProjects = () => {
    const [isMobile, setIsMobile] = useState (window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <div className={`${globalStyles.title} ${styles.charity_title}`}>
          Активні благодійні проєкти
        </div>
        <div className={`${globalStyles.text14B} ${styles._text14B}`}>
          Наш фонд постійно реагує на актуальні потреби під час воєнного стану.
        </div>
        {!isMobile ? ( <>

       
            <div className={` ${styles.charity_item}`}>
          <div className={` ${styles.charity_left}`}>
            <div className={`${globalStyles.title} ${styles.title_item}`}>
              Благодійні концерти на підтримку ЗСУ
            </div>
            <div className={` ${styles.btn_wrapper}`}>
              <ButtonToPartner />
              <ButtonFoto />
              <div className={` ${styles.btn_wrapper}`}></div>
            </div>
          </div>
          <div className={` ${styles.charity_right}`}>
            <div className={`${globalStyles.text12Fw4} ${styles._text12Fw4}`}>
              Музика - невідʼємна частина нашого фонду. Засновники фонду мають
              багаторічний досвід в організації і проведенні музичних заходів.
              Фонд “Для Героїв” вже встиг успішно провести 4 благодійні
              концертні тури (разом з рок-гуртом Epolets). Ми маємо прорахований
              проєкт благодійного музичного фестивалю в Києві. Ми плануємо
              благодійний захід для сприяння розвитку культури серед молодого
              покоління. Ми маємо на меті провести благодійні концерти за участю
              українських виконавців за межами України.
            </div>
          </div>
        </div>
        <div className={` ${styles.horizontal_line}`}></div>
        <div className={` ${styles.charity_item}`}>
          <div className={` ${styles.charity_left}`}>
            <div className={`${globalStyles.title} ${styles.title_item_2}`}>
            Забезпечення військових дронами і суміжною технікою
            </div>
            
            <div className={` ${styles.btn_wrapper}`}>
              <ButtonToPartner />
              <ButtonFoto />
              <div className={` ${styles.btn_wrapper}`}></div>
            </div>
          </div>
          <div className={` ${styles.charity_right}`}>
            <div className={`${globalStyles.text12Fw4} ${styles.two_text12Fw4}`}>
            З початку 2023 року фонд почав розвивати напрям дронів. Ми доставили більше 50ти дронів DJI Mavic та Matrice від наших закордонних партнерів. Ми допомагали перепрошивати і анонімізувати дрони. Ми знайшли перевірених майстрів, що ремонтують дрони. Далі ми знайшли вітчизняних виробників FPV дронів, і за донати закупили і передали 50 бортів.
            </div>
          </div>
        </div>
        <div className={` ${styles.horizontal_line}`}></div>
        <div className={` ${styles.charity_item}`}>
          <div className={` ${styles.charity_left}`}>
            <div className={`${globalStyles.title} ${styles.title_item}`}>
            Друк на 3D принтерах на потреби ЗСУ
            </div>
            <div className={` ${styles.btn_wrapper}`}>
              <ButtonToPartner />
              <ButtonFoto />
              <div className={` ${styles.btn_wrapper}`}></div>
            </div>
          </div>
          <div className={` ${styles.charity_right}`}>
            <div className={`${globalStyles.text12Fw4} ${styles._text12Fw4}`}>
            Восени 2023 року ми започаткували новий напрямок - друк 3D моделей на потреби військових. Ніжки для дронів, лоадери для магазинів, захисні ковпачки, скиди та інші корисні речі постійно друкуються і передаються військовим. Працюємо як напряму з запитами від військових, так і долучаємось до мережі ДрукАрмії, допомагаючи їм виконувати запити від ЗСУ.
            </div>
          </div>
        </div>
        <div className={` ${styles.horizontal_line}`}></div>
        <div className={` ${styles.charity_item}`}>
          <div className={` ${styles.charity_left}`}>
            <div className={`${globalStyles.title} ${styles.title_item}`}>
            Гуманітарна допомога
            </div>
            <div className={` ${styles.btn_wrapper}`}>
              <ButtonToPartner />
              <ButtonFoto />
              <div className={` ${styles.btn_wrapper}`}></div>
            </div>
          </div>
          <div className={` ${styles.charity_right}`}>
            <div className={`${globalStyles.text12Fw4} ${styles._text12Fw4}`}>
            Протягом життя фонду, майже з самого його заснування, отримання гуманітарної допомоги від партнерів і передача її тим, хто найбільше її потребує, було і залишається важливою складовою діяльності нашого фонду. За 2023 рік наш фонд передав гуманітарної допомоги на понад 14 млн грн. Аптечки, турнікети, бронежилети, термобілизна, сухпаї, пробіотики, лікарняні ліжка, милиці, інвалідні візки, продукти харчування, гігієнічні засоби, одяг, вогнегасники, перевʼязочний матеріал і багато інших речей - знайшли тих, хто їх потребує найбільше.
            </div>
          </div>
        </div>
        <div className={` ${styles.horizontal_line}`}></div>
        </>) : <CharityProjectsMobile/>
        
        }
        
      </div>
    </section>
  );
};

export default CharityProjects;
