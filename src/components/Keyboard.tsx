import KEYS from "../data/keys.json";
import Key from "./Key";

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  isDisabled?: boolean;
  addGuessedLetter: (letter: string) => void;
};

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  isDisabled,
  addGuessedLetter,
}: KeyboardProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <Key
            isDisabled={isDisabled}
            addGuessedLetter={addGuessedLetter}
            isActive={isActive}
            isInactive={isInactive}
            letter={key}
            key={key}
          />
        );
      })}
    </div>
  );
};

export default Keyboard;
