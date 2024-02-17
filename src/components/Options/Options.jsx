import css from './Options.module.css';

const Options = ({ onUpdate, isHidden, onReset }) => {

    return (
        <div className={css.options}>
            <button
                className={css.optionButton}
                onClick={() => onUpdate("good")}
                name="good">Good</button>
            <button
                className={css.optionButton}
                onClick={() => onUpdate("neutral")}
                name="neutral">Neutral</button>
            <button
                className={css.optionButton}
                onClick={() => onUpdate("bad")}
                name="bad">Bad</button>
            {!isHidden && (
                <button 
                    className={css.optionButton} 
                    onClick={onReset}>Reset</button>)}
        </div>
    )
}

export default Options