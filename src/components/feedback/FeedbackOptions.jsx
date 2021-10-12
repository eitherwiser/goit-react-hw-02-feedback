import React from 'react';
import PropTypes from 'prop-types';
import s from "./FeedbackOptions.module.css"

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
      <ul className={s.feedbackList}>
        {options.map(item => (
          <li key={item}>
            <button className={s.btn}
              type="button"
              value={item}
              onClick={onLeaveFeedback}
              >
              {item[0].toUpperCase() + item.slice(1)}
            </button>
            </li>
        ))}
      </ul>
  );

}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}