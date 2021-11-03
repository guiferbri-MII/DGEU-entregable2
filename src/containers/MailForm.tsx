import { connect } from 'react-redux';
import MailForm from "../components/MailForm";
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({dataForm: state.dataForm});
}
export default connect(mapStateToProps)(MailForm);