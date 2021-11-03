import { Stack } from '@fluentui/react';
import React from 'react';
import { ColourComponent } from './modifiers/ColourComponent';
import { FontComponent } from './modifiers/FontComponent';

const OpenA11yComponent: React.FC = () => {
  const docBody = document.querySelector('body');
  const removeClasses = (elementClasses: string[]) => docBody.classList.remove(...elementClasses);
  const addClass = (elementClass: string) => docBody.classList.add(elementClass);
  const toggleClass = (elementClass: string) => docBody.classList.toggle(elementClass);

  return (
    <Stack>
      <FontComponent removeClasses={removeClasses} toggleClass={toggleClass} addClass={addClass} />
      <ColourComponent removeClasses={removeClasses} toggleClass={toggleClass} addClass={addClass} />
    </Stack>
  );
};

export { OpenA11yComponent };
