import React from 'react';
import '../assets/scss/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faShippingFast } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faShippingFast);

interface RadioButtonProps {
  label: string;
  icon: 'envelope' | 'shipping-fast';
  onClick?: () => void;
}

export class RadioButton extends React.Component<RadioButtonProps,{}> {
  constructor(props: RadioButtonProps) {
    super (props);
  }

  public render() {
    const { label, icon, ...props } = this.props;
    return (
      <div className="col">
        <div className="row text-center form">
          <div className="col">
            <label htmlFor={'radio-' + icon}>{label}</label>
          </div>
          <div className="w-100"></div>
          <div className="col">
            <input type="radio" className="btn-check" name="radiobutton" id={'radio-' + icon} autoComplete="off" />
            <label className="btn formButton" htmlFor={'radio-' + icon}>
              <FontAwesomeIcon icon={['fas',icon]}/>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
