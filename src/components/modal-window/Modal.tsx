import { FC, PropsWithChildren } from 'react';
import { Button } from '../button/Button';
import './modal.css';

interface ModalProps {
  /**
   * Видимость окна
   */
  visible: boolean;
  closeModal?: () => void;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ visible, children, closeModal }) =>
  visible && (
    <div className="modal">
      <div className="modal--body">
        <div className="modal--body_text-container">{children}</div>
        <div className="modal--close">
          <Button onClick={closeModal} type="icon">
            &#120;
          </Button>
        </div>
      </div>
    </div>
  );
