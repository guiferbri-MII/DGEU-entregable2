import { connect } from 'react-redux';
import Summary from "../components/Summary";
import IGlobalState from '../state/globalState';
import { Dispatch } from 'redux';

const mapStateToProps = (state: IGlobalState) => {
    return ({products: state.addedProducts});
}
export default connect(mapStateToProps)(Summary);