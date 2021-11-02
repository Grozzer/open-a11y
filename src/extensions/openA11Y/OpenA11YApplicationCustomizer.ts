import { override } from "@microsoft/decorators";
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName,
} from "@microsoft/sp-application-base";
import { Log } from "@microsoft/sp-core-library";
import { Dialog } from "@microsoft/sp-dialog";
import * as strings from "OpenA11yApplicationCustomizerStrings";
import * as React from "react";
import ReactDOM from "react-dom";
import { OpenA11yComponent } from "./OpenA11yComponent";

const LOG_SOURCE: string = "OpenA11yApplicationCustomizer";

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IOpenA11yApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class OpenA11yApplicationCustomizer extends BaseApplicationCustomizer<IOpenA11yApplicationCustomizerProperties> {
  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    const placeholder: PlaceholderContent =
      this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top);
    const element: React.ReactElement = React.createElement(OpenA11yComponent);

    let message: string = this.properties.testMessage;
    if (!message) {
      message = "(No properties were provided.)";
    }

    Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);

    ReactDOM.render(element, placeholder.domElement);

    return Promise.resolve();
  }
}
