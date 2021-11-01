import { connect } from 'react-redux';
import Product from "../components/Product";
import IGlobalState from '../state/globalState';
import { Dispatch } from 'redux';

const mapStateToProps = (state: IGlobalState) => {
    return ({products: state.addedProducts});
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateSummary: (product:any) => {
        dispatch({type: 'ADD_PRODUCT', product: product});
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Product);