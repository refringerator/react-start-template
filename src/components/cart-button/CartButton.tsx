import { FC, PropsWithChildren } from 'react';
import { Button, ButtonProps } from '../button/Button';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: none;
  outline: none;
  max-width: 50px;
  text-align: center;
  border-bottom: 2px solid #e1e4eb;
`;

const StyledCounter = styled.div`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

export interface CartButtonProps extends ButtonProps {
  /**
   * Количество в корзине
   */
  count: number;
}

export const CartButton: FC<PropsWithChildren<CartButtonProps>> = ({ children, icon, size, type, count }) => {
  return count ? (
    <StyledCounter>
      <Button type={'icon'}>&#60;</Button>
      <StyledInput value={count} />
      <Button type={'icon'}>&#62;</Button>
    </StyledCounter>
  ) : (
    <Button type={type} size={size}>
      {children}
    </Button>
  );
};
