import React from 'react';
import '../assets/scss/main.scss';
import { MailForm } from './MailForm';
import { RadioButtonGroup } from './RadioButtonGroup';

interface IStep2State {
    idChecked: string;
}

export class Step2 extends React.Component<{},IStep2State> {
    constructor() {
        super ({});
        this.state= {idChecked : 'online'};
    }

    public render() {

        const onValueChange = (event:React.ChangeEvent<HTMLInputElement>) => {
          this.setState({
            idChecked: event.target.id
          });
        }

        return(
            <div className="row">
                <div className="text-center mb-2">
                    <RadioButtonGroup idChecked={this.state.idChecked} onValueChange={onValueChange}/>
                </div>
                <div className="">
                    <MailForm online={this.state.idChecked === 'online'}/>
                </div>
            </div>
        );
    }
}
export default Step2;