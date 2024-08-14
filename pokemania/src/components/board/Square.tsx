import { SquareProps } from "../../interfaces/Board";

const Square: React.FC<SquareProps> = ({
  children,
  isSelected,
  updateBoard,
  index,
}) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    if (updateBoard) {
      updateBoard(index || 0);
    }
  };
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

export default Square;
