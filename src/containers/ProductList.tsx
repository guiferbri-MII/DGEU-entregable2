import { connect } from 'react-redux';
import ProductList from "../components/ProductList";
import IGlobalState from '../state/globalState';
import { Dispatch } from 'redux';
import { ButtonActions } from '../actions/ButtonActions';

const mapStateToProps = (state: IGlobalState) => {
    return ({activeStep: state.activeStep, addedProducts: state.addedProducts});
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onClickNext: () => {
        dispatch({type: ButtonActions.NEXT_STEP, nextStep: 'step-2', currentStep: 'step-1'});
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);