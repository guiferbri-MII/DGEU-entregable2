import React from 'react';
import '../assets/scss/main.scss';
import Step1 from '../containers/Step1';
import Step2 from '../containers/Step2';

interface PageProps {
    activeStep: string;
}
  
export class Page extends React.Component<PageProps,{}> {
    constructor(props: PageProps) {
        super (props);
    }

    public render() {
        const { ...props } = this.props;
        return (
            <div>
                { (() => {
                switch(this.props.activeStep){
                    case 'step-1':
                        return (<Step1 />)
                    case 'step-2':
                        return (<Step2 />)
                }
                }) ()}
            </div>
        );
    }
}
export default Page;