import React from 'react';
import '../assets/scss/main.scss';
import { WizardStep } from './WizardStep';

interface WizardStepProps {
}

export class Wizard extends React.Component<WizardStepProps,{}> {
  constructor(props: WizardStepProps) {
    super (props);
  }

  public render() {
    return (
      <div className="row wizard">
        <WizardStep stepName="Elige experiencia" status="complete"/>
        <WizardStep stepName="Método de pago" status="active"/>
        <WizardStep stepName="Pago" status="disabled" />
      </div>
    );
  }
}
