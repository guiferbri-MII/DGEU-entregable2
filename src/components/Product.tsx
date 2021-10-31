import React from 'react';
import '../assets/scss/main.scss';
import defaultImage from '../assets/img/airelogo.jpeg';
import { Button } from './Button';

interface ProductProps {
    title: string;
    description: string;
    price: number;
    time: string;
    image?: string;
}

export class Product extends React.Component<ProductProps,{}> {
    constructor(props: ProductProps) {
      super (props);
    }
  
    static defaultProps = {
      image : defaultImage
    };

    public updateSummary = () => {
        console.log('update');
    }
  
    public render() {
      const { title, description, price, time, image, ...props } = this.props;
      return (
        <div className={['card cardProduct'].join(' ')} {...props}>
            <img src={ image } className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">{ description }</p>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <p className="card-text">{ time }'</p>                        
                    </div>
                    <div className="col-12 col-sm-6">
                        <p className="card-text float-end">{ price }€</p>  
                    </div>
                    <div className="col-4">
                        <Button buttonType="card" icon="plus" onClickButton={this.updateSummary}/>
                    </div>
                    <div className="col-4 text-center cardQuantity">
                        1
                    </div>
                    <div className="col-4">
                        <Button buttonType="card" icon="minus" onClickButton={this.updateSummary}/>
                    </div>
                </div>
            </div>
        </div>
      );
    }  
}
export default Product;