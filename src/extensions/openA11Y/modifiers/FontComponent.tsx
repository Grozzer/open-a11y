require('./Style-Fonts.module.scss');

import { Stack } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import React from 'react';
import { IOpenA11yBodyClassModifierComponent } from '../IOpenAllyBodyClassModifierComponent';

interface IFontDefinition {
  name: string;
  value: string;
}

// TODO: load dynamically?
const fonts: IFontDefinition[] = [
  { name: 'Arial', value: 'access_font_arial' },
  { name: 'Times New Roman', value: 'access_font_timesnewroman' },
  { name: 'OpenDyslexic', value: 'access_font_opendyslexic' },
  { name: 'Verdana', value: 'access_font_verdana' },
];

const FontComponent: React.FC<IOpenA11yBodyClassModifierComponent> = ({ removeClasses, addClass }) => {
  const [selected, setSelected] = React.useState<IFontDefinition | undefined>(undefined);

  const removeAll = () => removeClasses(fonts.map((f) => f.value));

  const changeFont = (font: IFontDefinition) => {
    removeAll();
    addClass(font.value);
    setSelected(font);
  };

  return (
    <Stack horizontal>
      {fonts.map((f) => (selected === f ? <PrimaryButton text={f.name} /> : <DefaultButton text={f.name} onClick={() => changeFont(f)} />))}
      <DefaultButton
        text="Normal"
        onClick={() => {
          removeAll();
          setSelected(undefined);
        }}
      />
    </Stack>
  );
};

export { FontComponent };
