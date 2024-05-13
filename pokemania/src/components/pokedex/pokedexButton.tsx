import { ButtonProps } from '../../interfaces/PokemonCardProps';

export const CreateButton: React.FC<ButtonProps> = ({ onClick, className, icon }) => {
  return (
    <button className={className} onClick={onClick}>
      {icon}
    </button>
  );
};