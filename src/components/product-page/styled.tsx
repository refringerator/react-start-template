import { styled, css } from 'styled-components';
import theme from 'styled-theming';

const pageBackgroundColor = theme('mode', {
  ocean: '#3977ad',
  forest: '#739072',
});
const pageColor = theme('mode', {
  ocean: '#ffffff;',
  forest: '#070D06',
});

// .page--disabled .page--image__wrapper {
//   opacity: 0.4;
// }

export const Page = styled.div`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  width: fit-content;
  background: ${pageBackgroundColor};
  padding: 1em;
  color: ${pageColor};
  border-radius: 2px;
`;

export const PageInner = styled.div`
  display: flex;
  column-gap: 2em;
  justify-content: space-between;
  align-items: center;
`;

export const PageImages = styled.div`
  width: 48em;
  height: calc(100vh - 4em);
  display: grid;
  gap: 0.6em;
  grid-template-columns: repeat(auto-fill, minmax(12em, 1fr));
`;

export const PageImage = styled.div`
  width: 100%;
  border-radius: 2px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const PageContent = styled.div`
  width: calc(100% - 2em);
  height: calc(100vh - 8em);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
`;

export const PageCategory = styled.span`
  font-weight: normal;
  font-size: 1rem;
`;

export const PageName = styled.h2`
  line-height: 1;
`;

export const PageDescription = styled.p`
  width: 100%;
  margin: 0 0 20px 0;
  line-height: 1.5;
  text-indent: 2em;
`;

export const PageFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PagePriceWrapper = styled.div``;

export const PagePrice = styled.div`
  font-weight: bolder;
`;

export const PagePriceOld = styled.div`
  font-weight: bolder;
  font-size: 12px;
  color: #c9cdcf;
  text-decoration: line-through;
`;
