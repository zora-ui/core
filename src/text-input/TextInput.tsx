import {
  ITextInputComponent,
  TextInputHeadlessComponent,
} from 'petals-ui/dist/text-input';

import { BaseStructuralComponent } from '../basic';

class TextInputStructuralComponent extends BaseStructuralComponent<
  TextInputHeadlessComponent,
  ITextInputComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new TextInputHeadlessComponent(props) });
  }
}

export { TextInputStructuralComponent };
