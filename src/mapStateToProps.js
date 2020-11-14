import COMPONENT_LOADER from "./components/Loader";

function mapStateToProps(component) {
  if (COMPONENT_LOADER) {
    return function (state) {
        return {
      value: state
        }
    };
  } else {
    return undefined;
  }
}

export default mapStateToProps
