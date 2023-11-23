import { FC } from 'react';
import { SwitchBase, SwitchLabel, SwitchInput, SwitchSlider } from './styled';

interface SwitchProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  switched?: boolean;
}

export const Switch: FC<SwitchProps> = ({ onChange, switched }) => (
  <SwitchBase>
    <SwitchLabel>
      <SwitchInput type="checkbox" checked={switched} onChange={(e) => onChange(e)} />
      <SwitchSlider />
    </SwitchLabel>
  </SwitchBase>
);
