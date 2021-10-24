import React from 'react';
import '../assets/scss/main.scss';
import { RadioButton } from './RadioButton';

interface RadioButtonGroupProps {
  onClick?: () => void;
}

export class RadioButtonGroup extends React.Component<RadioButtonGroupProps,{}> {
  constructor(props: RadioButtonGroupProps) {
    super (props);
  }

  public render() {
    const { ...props } = this.props;
    return (
      <div className="btn-group" role="group">
        <div className="row">
          <RadioButton label="Online" icon="envelope" />
          <RadioButton label="Correo postal" icon="shipping-fast" />
        </div>
      </div>
    );
  }
}
