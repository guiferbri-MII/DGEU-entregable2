import { connect } from 'react-redux';
import Summary from "../components/Summary";
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({products: state.addedProducts, applyDiscount: state.applyDiscount, discount: state.discount});
}
export default connect(mapStateToProps)(Summary);