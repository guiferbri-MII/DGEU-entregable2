import React from 'react';
import '../assets/scss/main.scss';
import ProductList from '../containers/ProductList';
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
                        return (<ProductList />)
                    case 'step-2':
                        return(<Step2 />)
                }
                }) ()}
            </div>
        );
    }
}
export default Page;