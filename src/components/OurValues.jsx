import style from "./ourValues.module.css";
import FlagIcon from "./ui/icons/FlagIcon";

const OurValues = () => {
    return ( <section className={style.section}>
        <p className={style.title}>наша сила у наших цінностях</p>
        <div className={style.values}>
        <FlagIcon />
        <div className={style.values_title}>Єднісь</div>
        <FlagIcon/>
        <div className={style.values_title}>Взаємодія</div>
        <FlagIcon/>
        <div className={style.values_title}>Повага</div>
        <FlagIcon/>
        <p className={style.values_title}>Віра в перемогу <br></br>
України</p>
        <FlagIcon/>
        <div className={style.values_title}>Прозорість і<br></br>звітність</div>
            
        </div>
    </section> );
}
 
export default OurValues;