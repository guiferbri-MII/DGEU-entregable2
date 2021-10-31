import React from 'react';
import '../assets/scss/main.scss';
import { Product } from './Product';
import { Button } from './Button';

interface ProductListProps {
    onClickNext: () => any;
}
  
export class ProductList extends React.Component<ProductListProps,{}> {
    constructor(props: ProductListProps) {
        super (props);
    }

    public render() {
        const { ...props } = this.props;

        const validate = () => {
            console.log('validate'); //ToDo comprobar que se han añadido prods, si hay..llamar a onclicknext
            this.props.onClickNext();
        }

        return (
        <div className="row">
            <Product title="Producto 1" description="Descripcion producto 1" price={120} time="30"/>
            <Product title="Producto 2" description="Descripcion producto 2" price={60} time="15"/>
            <Product title="Producto 3" description="Descripcion producto 3" price={180} time="90"/>
            <Button label="Siguiente" buttonType="form" onClickButton={validate}/>
        </div>
        );
    }
}
export default ProductList;