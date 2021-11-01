import { connect } from 'react-redux';
import ProductList from "../components/ProductList";
import IGlobalState from '../state/globalState';
import { Dispatch } from 'redux';

const mapStateToProps = (state: IGlobalState) => {
    return ({activeStep: state.activeStep, addedProducts: state.addedProducts});
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onClickNext: () => {
        dispatch({type: 'NEXT_STEP', nextStep: 'step-2', currentStep: 'step-1'});
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);