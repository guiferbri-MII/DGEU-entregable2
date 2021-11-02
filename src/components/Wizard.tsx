import React from 'react';
import '../assets/scss/main.scss';
import { WizardStep } from './WizardStep';

export enum Status{
  complete = "complete",
  active = "active",
  disabled = "disabled"
}

interface WizardProps {
  steps: {
    title: string,
    status: Status;
    id: string
  }[]
}

export class Wizard extends React.Component<WizardProps,{}> {
  constructor(props: WizardProps) {
    super (props);
  }

  public render() {
    return (
      <div className="row wizard">
        {this.props.steps.map((step, i) => (
            <WizardStep stepName={step.title} status={step.status} key={step.id}/>
        ))}
      </div>
    );
  }
}
export default Wizard;