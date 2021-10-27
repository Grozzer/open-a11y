import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'OpenA11YApplicationCustomizerStrings';

const LOG_SOURCE: string = 'OpenA11YApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IOpenA11YApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class OpenA11YApplicationCustomizer
  extends BaseApplicationCustomizer<IOpenA11YApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);    

    return Promise.resolve();
  }

  /**
  * Add main component & reload previous settings
  */
  public reloadAccessibilityHandler(): void {
    
  }

  /**
  * Create the access button for the settings panel
  */
  private createAccessButton(): void {

  }
}
