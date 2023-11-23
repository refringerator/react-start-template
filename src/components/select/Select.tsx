import { FC } from 'react';

import { styled } from 'styled-components';
import theme from 'styled-theming';

const itemBackgroundColor = theme('mode', {
  ocean: '#3977ad',
  forest: '#739072',
});
const itemColor = theme('mode', {
  ocean: '#ffffff;',
  forest: '#070D06',
});

const SelectStyled = styled.select`
  padding: 7px 7px;
  margin-right: 5px;
  color: ${itemColor};
  background-color: ${itemBackgroundColor};
  border-radius: 34px;
  border: none;
`;

// TODO: Не работает стилизация опций
const Option = styled.option`
  color: ${itemColor};
  background-color: ${itemBackgroundColor};
`;

type TOption = {
  value: string;
  title: string;
  icon?: string;
};

interface SelectProps {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: TOption[];
  value?: string;
}

export const Select: FC<SelectProps> = ({ onChange, options, value }) => (
  <SelectStyled value={value} onChange={onChange}>
    {options.map(({ title, value, icon }) => (
      <Option key={value} value={value}>
        {icon} {title}
      </Option>
    ))}
  </SelectStyled>
);
