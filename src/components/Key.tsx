import styles from "../keyboard.module.css";

type KeyProps = {
  isDisabled?: boolean;
  isActive: boolean;
  isInactive: boolean;
  letter: string;
  addGuessedLetter: (letter: string) => void;
};

const Key = ({
  isDisabled = false,
  isActive,
  isInactive,
  letter,
  addGuessedLetter,
}: KeyProps) => {
  return (
    <button
      onClick={() => addGuessedLetter(letter)}
      className={`${styles.btn} ${isActive ? styles.active : ""} ${
        isInactive ? styles.inactive : ""
      }`}
      key={letter}
      disabled={isActive || isInactive || isDisabled}
    >
      {letter}
    </button>
  );
};

export default Key;
