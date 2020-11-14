import { connect } from "react-redux";
import COMPONENT_LOADER from "../Loader";
import mapStateToProps from "../../mapStateToProps";
import mapDispatchToProps from "../../mapDispatchToProps";

const Loader = connect(
  mapStateToProps(COMPONENT_LOADER),
  mapDispatchToProps(COMPONENT_LOADER)
)(COMPONENT_LOADER);

export default Loader;
