import { DefaultButton, PrimaryButton, Stack } from '@fluentui/react';
import { useBoolean } from '@fluentui/react-hooks';
import { ContextualMenu } from '@fluentui/react/lib/ContextualMenu';
import { Dialog, DialogFooter, DialogType } from '@fluentui/react/lib/Dialog';
import React from 'react';
import { ColourComponent } from './modifiers/ColourComponent';
import { FontComponent } from './modifiers/FontComponent';

const dialogContentProps = {
  type: DialogType.normal,
  title: 'Accessibility by open-a11y',
  closeButtonAriaLabel: 'Close',
  subText: 'Would you like to enable a more accessible view?',
};

const dragOptions = {
  moveMenuItemText: 'Move',
  closeMenuItemText: 'Close',
  menu: ContextualMenu,
  keepInBounds: true,
};

const OpenA11yComponent: React.FC = () => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);

  const docBody = document.querySelector('body');
  const removeClasses = (elementClasses: string[]) => docBody.classList.remove(...elementClasses);
  const addClass = (elementClass: string) => docBody.classList.add(elementClass);
  const toggleClass = (elementClass: string) => docBody.classList.toggle(elementClass);

  return (
    <Stack>
      <PrimaryButton text="Accessibility" onClick={toggleHideDialog} />
      <Dialog hidden={hideDialog} onDismiss={toggleHideDialog} dialogContentProps={dialogContentProps} modalProps={{ dragOptions }}>
        <Stack>
          <FontComponent removeClasses={removeClasses} toggleClass={toggleClass} addClass={addClass} />
          <ColourComponent removeClasses={removeClasses} toggleClass={toggleClass} addClass={addClass} />
        </Stack>

        <DialogFooter>
          <DefaultButton onClick={toggleHideDialog} text="Done" />
        </DialogFooter>
      </Dialog>
    </Stack>
  );
};

export { OpenA11yComponent };
