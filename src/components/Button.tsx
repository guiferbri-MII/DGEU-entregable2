import React from 'react';
import '../assets/scss/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faMinus);

interface ButtonProps {
  label?: string;
  buttonType: 'card' | 'form';
  icon: 'plus' | 'minus';
  onClick?: () => void;
}

export class Button extends React.Component<ButtonProps,{}> {
  constructor(props: ButtonProps) {
    super (props);
  }

  static defaultProps = {
    buttonType : 'form',
    icon: 'plus'
  };

  public render() {
    const { label, buttonType, icon, ...props } = this.props;
    const buttonStyle = buttonType == 'card' ? ((icon == 'minus' ? 'float-end ' : '') + 'cardButton') : 'formButton';
    return (
      <button type="button" className={[buttonStyle,'btn btn-sm'].join(' ')} {...props}>
        {
            buttonType == 'card' ? (<FontAwesomeIcon icon={icon} />) : null
        }
        {label}
      </button>
    );
  }
}
