import theme from 'styled-theming';
import { styled } from 'styled-components';

const itemBackgroundColor = theme('mode', {
  ocean: '#3977ad',
  forest: '#739072',
});
const itemColor = theme('mode', {
  ocean: '#ffffff;',
  forest: '#070D06',
});

export const CartItemStyled = styled.div`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  width: fit-content;
  color: ${itemColor};
  background: ${itemBackgroundColor};
  padding: 1em;
  border-radius: 2px;
`;

export const CartItemInner = styled.div`
  display: flex;
  column-gap: 2em;
  justify-content: space-between;
  align-items: center;
`;

export const CartItemImages = styled.div`
  height: 8em;
  display: grid;
  gap: 0.6em;
  grid-template-columns: repeat(auto-fill, minmax(12em, 1fr));
`;

export const CartItemImage = styled.div`
  width: 100%;
  border-radius: 2px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const CartItemContent = styled.div`
  width: calc(100% - 2em);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
`;

export const CartItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CartItemCategory = styled.span`
  font-weight: normal;
  font-size: 1rem;
`;

export const CartItemName = styled.h2`
  line-height: 1;
  display: inline;
`;

export const CartItemDescription = styled.p`
  width: 34em;
  margin: 20px 0;
  line-height: 1.5;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const CartItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CartItemFooterWrapper = styled.div``;

export const CartItemFooterPrice = styled.div`
  font-weight: bolder;
`;

export const CartItemFooterPriceOld = styled.div`
  font-weight: bolder;
  font-size: 12px;
  color: #c9cdcf;
  text-decoration: line-through;
`;
