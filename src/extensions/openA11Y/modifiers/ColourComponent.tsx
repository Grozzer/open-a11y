import { Label, Stack } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import React from 'react';
import { IOpenA11yBodyClassModifierComponent } from '../IOpenAllyBodyClassModifierComponent';
import styles from './Style-Colours.module.scss';

const ColourComponent: React.FC<IOpenA11yBodyClassModifierComponent> = ({ toggleClass }) => (
  <Stack>
    <Label>Colour</Label>
    <Stack horizontal>
      <DefaultButton text="Dark mode" onClick={() => toggleClass(styles.access_colour_highContrast_bw)} />
    </Stack>
  </Stack>
);

export { ColourComponent };
