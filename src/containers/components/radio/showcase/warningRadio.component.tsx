import React from 'react';
import {
  Radio,
  RadioProps,
} from 'react-native-ui-kitten';

interface CheckBoxShowcaseComponentState {
  checked: boolean;
}

class RadioShowcaseComponent extends React.Component<RadioProps, CheckBoxShowcaseComponentState> {

  static defaultProps: RadioProps = {
    checked: true,
  };

  public state: CheckBoxShowcaseComponentState = {
    checked: this.props.checked,
  };

  private onChange = (checked: boolean) => {
    this.setState({ checked });
  };

  public render(): React.ReactElement<RadioProps> {
    return (
      <Radio
        {...this.props}
        checked={this.state.checked}
        onChange={this.onChange}
      />
    );
  }
}

export const WarningRadio = (props?: RadioProps): React.ReactElement<RadioProps> => {
  return (
    <RadioShowcaseComponent
      status='warning'
      {...props}
    />
  );
};
