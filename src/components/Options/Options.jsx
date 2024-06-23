import css from "./Options.module.css";

export default function Options({ onClickBotton, onClickReset, total }) {
  return (
    <div className={css.buttonContainer}>
      <button className={css.button} onClick={() => onClickBotton("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onClickBotton("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onClickBotton("bad")}>
        Bad
      </button>
      {total > 0 ? (
        <button className={css.button} onClick={onClickReset}>
          Reset
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
