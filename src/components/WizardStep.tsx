import React from 'react';
import '../assets/scss/main.scss';

interface WizardStepProps {
  stepName: string;
  status: 'complete' | 'active' | 'disabled';
  onClick?: () => void;
}

export class WizardStep extends React.Component<WizardStepProps,{}> {
  constructor(props: WizardStepProps) {
    super (props);
  }

  public render() {
    const { stepName, status, ...props } = this.props;
    return (
      <div className={['col-4 wizardStep', status].join(' ')}>
        <div className="text-center wizardStepName">{stepName}</div>
        <div className="wizardProgress"><div className="wizardProgressBar" ></div></div>
        <p className="wizardCircle"></p>
      </div>
    );
  }
}
