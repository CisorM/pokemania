export interface ModalProps {
	children?: React.ReactNode;
	setActiveIndex?: React.Dispatch<React.SetStateAction<number>>;
	setTranslate?: React.Dispatch<React.SetStateAction<number>>;
	handleLinkClick?: (id: string | null) => void;
	
	setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
	searchTerm?: string;

	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}