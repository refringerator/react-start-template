import React, { FC, PropsWithChildren } from 'react';
import './modal.css';

interface ModalProps {
  visible: boolean;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ visible, children }) => {
  return (
    visible && (
      <div className="modal">
        <div className="modal--body">{children}</div>
      </div>
    )
  );
};
