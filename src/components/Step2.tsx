import React from 'react';
import '../assets/scss/main.scss';
import { DataForm } from './MailForm';
import MailForm from '../components/MailForm';
import { RadioButtonGroup } from './RadioButtonGroup';

interface IStep2State {
    idChecked: string;
}

interface IStep2Props {
    dataForm: DataForm;
    idChecked: string;
    onClickNext: (dataForm: DataForm, idChecked: string) => void;
    onClickCancel: () => void;
}

export class Step2 extends React.Component<IStep2Props,IStep2State> {
    constructor(props: IStep2Props) {
        super (props);
        this.state= {idChecked : this.props.idChecked};
    }

    public render() {

        const onValueChange = (event:React.ChangeEvent<HTMLInputElement>) => {
          this.setState({
            idChecked: event.target.id
          });
        }

        return(
            <div className="container">
                <div className="row">
                    <div className="text-center mb-2">
                        <RadioButtonGroup idChecked={this.state.idChecked} onValueChange={onValueChange}/>
                    </div>
                </div>
                <div className="row">
                    <MailForm dataForm={this.props.dataForm} online={this.state.idChecked === 'online'} onClickCancel={this.props.onClickCancel} onClickNext={this.props.onClickNext} />
                </div>
            </div>
        );
    }
}
export default Step2;