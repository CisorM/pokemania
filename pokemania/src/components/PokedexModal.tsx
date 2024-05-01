import { ModalProps } from '../interfaces/ModalProps';
import { Modal } from './ui/Modal';

export const PokedexModal: React.FC<ModalProps> = ({isOpen, setIsOpen}) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <article>
                <p>Cositas</p>
                <p>Cositas</p>
                <p>Cositas</p>
                <p>Cositas</p>
                <p>Cositas</p>
                <p>Cositas</p>
                <p>Cositas</p>
                <p>Cositas</p>
                <p>Cositas</p>
                <p>Cositas</p>
                <p>Cositas</p>
                <p>Cositas</p>
            </article>
        </Modal>
    )
}