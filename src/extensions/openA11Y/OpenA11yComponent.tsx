import { DefaultButton, IconButton, IStackTokens, IButtonStyles, PrimaryButton, Stack, Popup, Modal, DefaultPalette, FontWeights, getTheme, mergeStyleSets } from '@fluentui/react';
import { useBoolean, useId } from '@fluentui/react-hooks';
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

const dialogStyles = { main: { maxWidth: 800 } };

const dragOptions = {
  moveMenuItemText: 'Move',
  closeMenuItemText: 'Close',
  menu: ContextualMenu,
  keepInBounds: true,
};

const gapTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};



const OpenA11yComponent: React.FC = () => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);

  const docBody = document.querySelector('body');
  const removeClasses = (elementClasses: string[]) => docBody.classList.remove(...elementClasses);
  const addClass = (elementClass: string) => docBody.classList.add(elementClass);
  const toggleClass = (elementClass: string) => docBody.classList.toggle(elementClass);

  const titleId = useId('title');

  return (
    <Stack>
      <IconButton iconProps={{ iconName: 'Contrast' }} title="Open accessibility options." onClick={toggleHideDialog} />
      <Modal
        isOpen={!hideDialog}
        onDismiss={toggleHideDialog}
        dragOptions={dragOptions}
        styles={dialogStyles}
      >
        <div className={modalStyles.header}>
          <h2 className={modalStyles.heading} id={titleId}>Accessibility Options Menu</h2>
          <IconButton iconProps={{ iconName: 'ChromeClose' }} styles={closeButtonStyles} onClick={toggleHideDialog} title="Close accessibility options." />
        </div>

        <Stack tokens={gapTokens}>
          <FontComponent removeClasses={removeClasses} toggleClass={toggleClass} addClass={addClass} />
          <ColourComponent removeClasses={removeClasses} toggleClass={toggleClass} addClass={addClass} />
        </Stack>

        <div className={modalStyles.footer}>
          <DefaultButton onClick={toggleHideDialog} text="Done" />
        </div>
      </Modal>
    </Stack>
  );
};

const theme = getTheme();
const modalStyles = mergeStyleSets({
  header: [
    {
      flex: '1 1 auto',
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      display: 'flex',
      alignItems: 'center',
      fontWeight: FontWeights.semibold,
      padding: '12px 12px 14px 24px'
    }
  ],
  heading: {
    color: theme.palette.neutralPrimary,
    fontWeight: FontWeights.semibold,
    fontSize: 'inherit',
    margin: '0'
  },
  footer: [
    {
      padding: '14px 12px',
      display: 'flex',
      alignItems: 'center'
    }
  ]
});

const closeButtonStyles: IButtonStyles = {
  root: {
    color: theme.palette.neutralPrimary,
    marginLeft: 'auto',
    marginTop: '4px',
    marginRight: '2px'
  }
}

export { OpenA11yComponent };
