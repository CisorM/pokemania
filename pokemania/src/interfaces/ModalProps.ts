export interface ModalProps {
	children?: React.ReactNode;
	setActiveIndex?: React.Dispatch<React.SetStateAction<number>>;
	setTranslate?: React.Dispatch<React.SetStateAction<number>>;
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}