import { connect } from 'react-redux';
import Step2 from "../components/Step2";
import IGlobalState from '../state/globalState';
import { Dispatch } from 'redux';
import { ButtonActions } from '../actions/ButtonActions';
import { MailFormActions } from '../actions/MailFormActions';
import { DataForm } from '../components/MailForm';

const mapStateToProps = (state: IGlobalState) => {
    return ({activeStep: state.activeStep, addedProducts: state.addedProducts, idChecked: state.idChecked, dataForm: state.dataForm});
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onClickNext: (dataForm: DataForm, idChecked: string) => {
        dispatch({type: MailFormActions.MAILFORM_FILLED, nextStep: 'step-3', currentStep: 'step-2', idChecked: idChecked, dataForm: dataForm});
    },
    onClickCancel: () => {
        dispatch({type: ButtonActions.BACK_STEP, nextStep: 'step-1', currentStep: 'step-2'});
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Step2);