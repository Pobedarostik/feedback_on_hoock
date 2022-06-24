import s from "./statistic.module.css"

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
    return(
       

            <div>
                <p className={s.good}>Good: {good}</p>
                <p className={s.neutral}>Neutral: {neutral}</p>
                <p className={s.bad}>Bad: {bad}</p>
                <p>Total:{total}</p>
                <p>Positive feedback: {positivePercentage}%</p>
            </div>
       
    )
}


export default Statistic;