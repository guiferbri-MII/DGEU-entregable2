import React from 'react';
import '../assets/scss/main.scss';
import { RadioButton } from './RadioButton';

interface RadioButtonGroupProps {
  idChecked: string;
  onValueChange: (event:React.ChangeEvent<HTMLInputElement>) => any;
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
          <RadioButton label="Online" icon="envelope" id="online" checked={this.props.idChecked === 'online'} onValueChange={this.props.onValueChange}/>
          <RadioButton label="Correo postal" icon="shipping-fast" id="postal" checked={this.props.idChecked === 'postal'} onValueChange={this.props.onValueChange}/>
        </div>
      </div>
    );
  }
}
