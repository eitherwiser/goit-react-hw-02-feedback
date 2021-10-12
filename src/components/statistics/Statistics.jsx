import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default function Statistics(
  {
    good,
    neutral,
    bad,
    total,
    positivePercentage,
  }) {
  
    const textColor = `rgba(
    ${200 - positivePercentage},
    ${positivePercentage + 50},
    50,
    ${((({neutral}.neutral / {total}.total) * 100) > 60) ?
      0.4 :
      ((({neutral}.neutral / {total}.total) * 100) > 10) ?
        (1 - (({neutral}.neutral / {total}.total) * 100) * 0.01) :
        1})`;
  
  return (

    <>

    <ul className={s.list}>
        <li className={s.good}>
          <span>
              {good} {" "}
          </span>
          <span className="material-icons">
          sentiment_satisfied 
          </span>
      </li>

        <li className={s.neutral}>
          <span>
              {neutral} {" "}
          </span>
          <span className="material-icons">
            sentiment_neutral 
          </span>

      </li>

        <li className={s.bad}>
          <span>
            {bad} {" "}
          </span>
          <span className="material-icons">
            sentiment_dissatisfied 
          </span>
      </li>
      
      </ul>

      {({ good }.good === { total }.total) ?
          (<p style={{ color: textColor }}><span>{positivePercentage}%</span> positive!</p>) :
            ({ good }.good === 0) ?
          (<p style={{color: textColor }} > There are no positive feedbacks here.</p>):
          (<p style={{color: textColor }} ><span>{positivePercentage}%</span> feedbacks are positive of total <span>{total}</span>.</p>)
      }
      </>
  );

}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};