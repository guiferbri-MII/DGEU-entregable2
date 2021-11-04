import { connect } from 'react-redux';
import PaymentForm from "../components/PaymentForm";
import IGlobalState from '../state/globalState';
import { Dispatch } from 'redux';
import { PaymentActions } from '../actions/PaymentActions';
import { ButtonActions } from '../actions/ButtonActions';

const mapStateToProps = (state: IGlobalState) => {
    return ({});
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onClickFinish: () => {
        alert('ENHORABUENA!! Disfrute de su compra.');
        window.location.reload();
    },
    onClickCancel: () => {
        dispatch({type: ButtonActions.BACK_STEP, nextStep: 'step-2', currentStep: 'step-3'});
    },
    applyDiscount: (discountCode:string) => {
        dispatch({type: PaymentActions.APPLY_DISCOUNT, discountCode: discountCode});
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);