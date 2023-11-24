import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';
import { Button } from '../button/Button';
import { Modal } from '../modal-window/Modal';

const Input = styled.input`
  padding: 11px 20px;
  margin-right: 5px;
`;

export const ModalWrapper: FC = () => {
  const [showModal, setModal] = useState(false);
  const [textModal, setTextModal] = useState('');

  return (
    <div>
      <Input value={textModal} onChange={(e) => setTextModal(e.target.value)} />
      <Button onClick={() => setModal(true)}>Открыть окно с тексом</Button>
      {createPortal(
        <Modal visible={showModal} closeModal={() => setModal(false)}>
          {textModal || 'Тут должен быть текст из поля ввода'}
        </Modal>,
        document.body
      )}
    </div>
  );
};
