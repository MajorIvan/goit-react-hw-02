import css from './Feedback.module.css';

const Feedback = ({
    feedbackType: { good, neutral, bad },
    totalFeedback,
    positivFeedback,
  }) => {
    return (
      <div className={css.feedback}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positiv: {positivFeedback}%</p>
      </div>
    );
}

export default Feedback