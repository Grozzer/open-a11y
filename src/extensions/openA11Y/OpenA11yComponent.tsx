import { Stack } from '@fluentui/react';
import React from 'react';
import { OpenA11yColourComponent } from './OpenA11yColourComponent';
import { OpenA11yFontComponent } from './OpenA11yFontComponent';

const OpenA11yComponent: React.FC = () => {
  const docBody = document.querySelector('body');
  const removeClasses = (elementClasses: string[]) => docBody.classList.remove(...elementClasses);
  const addClass = (elementClass: string) => docBody.classList.add(elementClass);
  const toggleClass = (elementClass: string) => docBody.classList.toggle(elementClass);

  return (
    <Stack>
      <OpenA11yFontComponent removeClasses={removeClasses} toggleClass={toggleClass} addClass={addClass} />
      <OpenA11yColourComponent removeClasses={removeClasses} toggleClass={toggleClass} addClass={addClass} />
    </Stack>
  );
};

export { OpenA11yComponent };
