export interface ModalProps {
	children?: React.ReactNode;
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}