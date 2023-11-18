import { FC, PropsWithChildren } from 'react';
import { Button } from '../button/Button';
import './modal.css';

interface ModalProps {
  /**
   * Видимость окна
   */
  visible: boolean;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ visible, children }) =>
  visible && (
    <div className="modal">
      <div className="modal--body">
        <div className="modal--body_text-container">{children}</div>
        <div className="modal--close">
          <Button type="icon">&#120;</Button>
        </div>
      </div>
    </div>
  );
