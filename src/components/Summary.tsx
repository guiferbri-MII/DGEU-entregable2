import React from 'react';
import '../assets/scss/main.scss';

export interface SummaryProps {
    products : {
        title: string;
        price: number;
        time: string;
        //id: string;
        quantity: number;
    }[];
    applyDiscount: boolean;
    discount?: number;
}

export class Summary extends React.Component<SummaryProps,{}> {
    constructor(props: SummaryProps) {
      super (props);
    }

    static defaultProps = {
        discount : 0,
        applyDiscount : false
    };
  
    public render() {
        const { products, applyDiscount, discount, ...props } = this.props;
        var totalPrice = 0;
        var porductList = this.props.products;
        for (var i in porductList){
            totalPrice += (porductList[i].price * porductList[i].quantity);
        }
        totalPrice = this.props.applyDiscount ? totalPrice - (this.props.discount != null ? this.props.discount : 0) : totalPrice;
        return(
            <div className="card cardSummary">
                <div className="card-header">
                    Contenido de la Caja Regalo
                </div>
                <div className="card-body">
                    <div className="row">
                        {porductList.map((product, i) => (
                            <div className="col-12" key={'prod-'+i+'-div'}>
                                <p className="card-text float-start" key={'prod-'+i+'-title'}>{product.title}</p>
                                <p className="card-text float-end" key={'prod-'+i+'-price'}>{product.price * product.quantity}€</p>
                            </div>
                        ))}
                        {
                            this.props.applyDiscount ? <div className="col-12">
                                <p className="card-text float-start">Código promocional</p>
                                <p className="card-text float-end">-{this.props.discount}</p></div> : null
                        }
                        <div className="col-12">
                            <p className="card-text float-end">Total: {totalPrice}€</p>                            
                        </div>
                    </div>
                </div>
            </div>        
        );
    }  
}
export default Summary;