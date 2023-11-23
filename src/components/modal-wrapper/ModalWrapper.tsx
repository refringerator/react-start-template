import { FC, useState } from 'react';
import { Modal } from '../modal-window/Modal';
import { Button } from '../button/Button';
import { styled } from 'styled-components';

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

      <Modal visible={showModal} closeModal={() => setModal(false)}>
        {textModal || 'Тут должен быть текст из поля ввода'}
      </Modal>
    </div>
  );
};
