import { connect } from 'react-redux';
import Product from "../components/Product";
import IGlobalState from '../state/globalState';
import { Dispatch } from 'redux';
import { ProductActions } from '../actions/ProductActions';

const mapStateToProps = (state: IGlobalState) => {
    return ({products: state.addedProducts});
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    updatesummary: (product:any) => {
        dispatch({type: ProductActions.ADD_PRODUCT, product: product});
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Product);