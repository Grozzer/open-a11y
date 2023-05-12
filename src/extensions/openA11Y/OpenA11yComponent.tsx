import { DefaultButton, ActionButton, IconButton, IStackTokens, IButtonStyles, Stack, Modal, FontWeights, getTheme, mergeStyleSets } from '@fluentui/react';
import { useBoolean, useId } from '@fluentui/react-hooks';
import { ContextualMenu } from '@fluentui/react/lib/ContextualMenu';
import React from 'react';
import { ColourComponent } from './modifiers/ColourComponent';
import { FontComponent } from './modifiers/FontComponent';

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
      <ActionButton iconProps={{ iconName: 'Contrast' }} title="Open accessibility options menu." onClick={toggleHideDialog} accessKey='1' aria-keyshortcuts='control+alt+1'>
        Enable accessibility options.
      </ActionButton>

      <Modal
        isOpen={!hideDialog}
        onDismiss={toggleHideDialog}
        dragOptions={dragOptions}
        styles={dialogStyles} forceFocusInsideTrap
      >
        <div className={modalStyles.header}>
          <h2 className={modalStyles.heading} id={titleId}>Accessibility Options Menu</h2>
          <IconButton iconProps={{ iconName: 'ChromeClose' }} styles={closeButtonStyles} onClick={toggleHideDialog} title="Close accessibility options." />
        </div>
        <div className={modalStyles.mainBody}>
          <Stack tokens={gapTokens}>
            <p>Below are a range of options that provide accessibility improvements.</p>
            <FontComponent removeClasses={removeClasses} toggleClass={toggleClass} addClass={addClass} />
            <ColourComponent removeClasses={removeClasses} toggleClass={toggleClass} addClass={addClass} />
          </Stack>
        </div>
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
      display: 'flex',
      alignItems: 'center',
      fontWeight: FontWeights.semibold,
      padding: '12px 12px 6px 24px'
    }
  ],
  heading: {
    fontWeight: FontWeights.semibold,
    fontSize: 'inherit',
    margin: '0'
  },
  mainBody: [
    {
      padding: '0 12px 10px 12px'
    }
  ],
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
    marginLeft: 'auto',
    marginTop: '4px',
    marginRight: '2px'
  }
}

export { OpenA11yComponent };
