import theme from 'styled-theming';
import { styled, css } from 'styled-components';
import { TCardType } from './ProductCard';

const cardBackgroundColor = theme('mode', {
  ocean: '#3977ad',
  forest: '#739072',
});
const cardColor = theme('mode', {
  ocean: '#ffffff;',
  forest: '#070D06',
});

export const Card = styled.div<{ cardType?: TCardType }>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  width: 320px;
  background: ${cardBackgroundColor};
  color: ${cardColor};
  border-radius: 2px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease;
  cursor: pointer;
  &:hover {
    box-shadow: none;
  }

  ${(props) =>
    props.cardType == 'disabled' &&
    css`
      color: #b2b7c2;
      background: #e1e4eb;
      box-shadow: unset;
      cursor: default;
    `}
`;

export const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CardImageWrapper = styled.div<{ cardType?: TCardType }>`
  overflow: hidden;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;

  ${(props) =>
    props.cardType == 'disabled' &&
    css`
      opacity: 0.4;
    `}
`;

export const CardImage = styled.img`
  width: 100%;
  transition: transform 1.2s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

export const CardContent = styled.div`
  width: calc(100% - 2em);
  padding: 1em;
  user-select: none;
`;

export const CardCategory = styled.span`
  font-weight: normal;
  font-size: 1rem;
`;

export const CardName = styled.h2`
  max-width: 100px;
  line-height: 1;
`;

export const CardDescription = styled.p`
  width: 240px;
  margin: 0 0 20px 0;
  line-height: 1.4;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardPrice = styled.div`
  font-weight: bolder;
  text-align: end;
`;

export const CardPriceOld = styled.div`
  font-weight: bolder;
  font-size: 12px;
  color: #c9cdcf;
  text-decoration: line-through;
  text-align: end;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
