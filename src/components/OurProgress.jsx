import style from "./ourProgress.module.css";
import TeamImg from "./common/img/comands.png";

const OurProgress = () => {
  return (
    <section className={style.section}>
      <div className="container">
        <div className={style.team}>
          <div className={style.title}>досягнення нашої команди</div>
          <img src={TeamImg} alt="" />
          <button className={style.button}>
           <p className={style.btn_text}>Хочу підтримати</p> 
          </button>
        </div>
        <div>
            
        </div>
      </div>
    </section>
  );
};

export default OurProgress;
