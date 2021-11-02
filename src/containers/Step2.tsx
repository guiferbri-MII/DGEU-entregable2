import { connect } from 'react-redux';
import Step2 from "../components/Step2";
import IGlobalState from '../state/globalState';
import { Dispatch } from 'redux';

const mapStateToProps = (state: IGlobalState) => {
    return ({activeStep: state.activeStep, addedProducts: state.addedProducts});
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onClickNext: () => {
        dispatch({type: 'NEXT_STEP', nextStep: 'step-3', currentStep: 'step-2'});
    },
    onClickCancel: () => {
        dispatch({type: 'BACK_STEP', nextStep: 'step-1', currentStep: 'step-2'});
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Step2);