require('./Style-Fonts.module.scss');

import { Stack } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import React from 'react';
import { IOpenA11yBodyClassModifierComponent } from './IOpenAllyBodyClassModifierComponent';

// TODO: load dynamically?
const fonts = [
  { name: 'Arial', value: 'access_font_arial' },
  { name: 'Times New Roman', value: 'access_font_timesnewroman' },
  { name: 'OpenDyslexic', value: 'access_font_opendyslexic' },
  { name: 'Verdana', value: 'access_font_verdana' },
];

const OpenA11yFontComponent: React.FC<IOpenA11yBodyClassModifierComponent> = ({ removeClasses, addClass }) => {
  const changeFont = (fontValue) => {
    removeClasses(fonts.map((f) => f.value));
    addClass(fontValue);
  };

  return (
    <Stack horizontal>
      {fonts.map((f) => (
        <DefaultButton text={f.name} onClick={() => changeFont(f.value)} />
      ))}
    </Stack>
  );
};

export { OpenA11yFontComponent };
