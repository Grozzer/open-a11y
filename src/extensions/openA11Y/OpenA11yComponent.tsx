import { Dialog } from "@microsoft/sp-dialog";
import React from "react";

const OpenA11yComponent: React.FC = () => {
  Dialog.alert(`Hello from me`);
  return <p>Hello World</p>;
};

export { OpenA11yComponent };
