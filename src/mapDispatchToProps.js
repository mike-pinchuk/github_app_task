import { bindActionCreators } from "redux";
import { loading } from "./store/actionCreators/action";
import COMPONENT_LOADER from "./components/Loader";

function mapDispatchToProps(component) {
  switch (component) {
    case COMPONENT_LOADER:
      return function (dispatch) {
        return { loading: bindActionCreators(loading, dispatch) };
      };

    default:
      return undefined;
  }
}

export default mapDispatchToProps;
